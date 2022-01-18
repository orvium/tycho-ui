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
    private authService: AuthenticationService,
    private fakeApi: FakeApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.currentUser$;
  }

  onSave(donor: Donor): void {
    this.fakeApi.updateDonorProfile$(donor).pipe(
      tap((updatedDonor: Donor): void => {
        this.authService.currentUser$.next(updatedDonor);
        this.router.navigate(['donor', 'calls-for-data']);
      })
    ).subscribe();
  }
}
