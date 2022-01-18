import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    const user: User = this.authService.currentUser$.value;

    if (user) { return true; }

    this.router.navigate(['']);
    return false;
  }
}
