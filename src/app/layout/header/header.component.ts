import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Role } from 'src/app/core/enums/role.enum';
import { Notification } from 'src/app/core/interfaces/notification';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { EthereumService } from 'src/app/core/services/ethereum/ethereum.service';
import { NotificationsApiService } from 'src/app/core/services/notifications-api/notifications-api.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  user$: BehaviorSubject<User>;
  notifications$: BehaviorSubject<Notification[]>;
  isBlockchainEnabled = false;

  constructor(
    private authService: AuthenticationService,
    private ethereumService: EthereumService,
    private router: Router,
    private notificationsApi: NotificationsApiService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.currentUser$;
    this.notifications$ = this.notificationsApi.notifications$;
  }

  logout(): void { this.authService.logout(); }

  goToCalls(): void {
    const path: string = this.user$.value.role === Role.Donor ? 'donor' : 'consumer';

    this.router.navigate(['/', path, 'calls-for-data']);
  }

  goToMyCalls(): void {
    this.router.navigate(['/', 'donor', 'my-calls']);
  }

  goToAllDatasets(): void {
    this.router.navigate(['/', 'consumer', 'all-datasets']);
  }

  goToProfile(): void {
    const path: string = this.user$.value.role === Role.Donor ? 'donor' : 'consumer';

    this.router.navigate(['/', path, 'profile']);
  }

  goToNotifications(): void {
    this.router.navigate(['/', 'notifications']);
  }

  toggleBlockchain(event: any): void {
    this.isBlockchainEnabled = event.checked;

    if (this.ethereumService.isAvailable.value) {
      if (this.isBlockchainEnabled) {
        this.ethereumService.init().then((value: boolean) => {
          this.isBlockchainEnabled = value;
        });
      } else {
        this.snackbar.openSnackBar('Disabled', 'primary');
      }
    }
  }

  countUnreadNotifications(notifications: Notification[]): number {
    return notifications.filter((notification) => !notification.isRead).length;
  }
}
