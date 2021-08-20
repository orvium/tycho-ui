import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FakeApiService } from '../fake-api/fake-api.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Role } from '../../enums/role.enum';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser$: BehaviorSubject<User>;

  constructor(private _fakeApi: FakeApiService, private _router: Router) {
    this.currentUser$ = new BehaviorSubject(null);

    let user = localStorage.getItem('user');

    if (user) this.currentUser$.next(JSON.parse(user));
  }

  login$(email: string, password: string, role: Role): Observable<User> {
    return this._fakeApi.login$(email, password, role).pipe(
      tap((user: User): void => {
        this.currentUser$.next(user);

        localStorage.setItem('user', JSON.stringify(user));
      }),
    );
  }

  logout(): void {
    this.currentUser$.next(null);
    localStorage.removeItem('user');
    this._router.navigate(['/']);
  }
}
