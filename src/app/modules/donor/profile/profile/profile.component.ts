import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Donor } from 'src/app/core/interfaces/donor';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  user$: BehaviorSubject<User>;

  constructor(
    private _authService: AuthenticationService,
    private _fakeApi: FakeApiService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.user$ = this._authService.currentUser$;
  }

  onSave(donor: Donor): void {
    this._fakeApi.updateDonorProfile$(donor).pipe(
      tap((donor: Donor): void => {
        this._authService.currentUser$.next(donor);
        this._router.navigate(['donor', 'view']);
      })
    ).subscribe();
  }
}
