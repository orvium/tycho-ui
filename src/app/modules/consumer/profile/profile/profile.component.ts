import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Consumer } from 'src/app/core/interfaces/consumer';
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

  onSave(consumer: Consumer): void {
    this.fakeApi.updateConsumerProfile$(consumer).pipe(
      tap((updateCconsumer: Consumer): void => {
        this.authService.currentUser$.next(updateCconsumer);
        this.router.navigate(['consumer', 'calls-for-data']);
      })
    ).subscribe();
  }
}
