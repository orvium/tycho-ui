import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Role } from 'src/app/core/enums/role.enum';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  user$: BehaviorSubject<User>;

  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this._authService.currentUser$;
  }

  logout(): void { this._authService.logout() }

  goToView(): void {
    let path: string = this.user$.value.role === Role.Donor ? 'donor' : 'consumer';

    this._router.navigate(['/', path, 'view']);
  }

  goToProfile(): void {
    let path: string = this.user$.value.role === Role.Donor ? 'donor' : 'consumer';

    this._router.navigate(['/', path, 'profile']);
  }
}
