import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    const user: User = this._authService.currentUser$.value;

    if (user) { return true }

    this._router.navigate(['']);
    return false;
  }
}
