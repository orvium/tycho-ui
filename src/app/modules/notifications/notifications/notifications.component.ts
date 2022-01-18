import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Notification } from 'src/app/core/interfaces/notification';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';
import { NotificationsApiService } from 'src/app/core/services/notifications-api/notifications-api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {
  user$: BehaviorSubject<User>;
  notifications$: BehaviorSubject<Notification[]>;

  constructor(
    private authService: AuthenticationService,
    private notificationsApi: NotificationsApiService,
    private fakeApi: FakeApiService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.currentUser$;
    this.notifications$ = this.notificationsApi.notifications$;
  }

  markAsRead(notification: Notification): void {
    let userId: string;

    this.authService.currentUser$.pipe(
      tap((user: User) => userId = user._id),
      switchMap(() => this.notificationsApi.markAsRead$(notification._id)),
      switchMap(() => this.fakeApi.getUsersNotifications$(userId)),
      tap((notifications: Notification[]) => this.notifications$.next(notifications))
    ).subscribe();
  }
}
