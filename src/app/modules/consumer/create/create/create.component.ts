import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';
import { CallForDataService } from '../../../../core/services/call-for-data/call-for-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private fakeApi: FakeApiService,
    private cfdService: CallForDataService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSave(call: CallForData): void {
    if (call._id) {
      this.fakeApi.updateCall$(call).subscribe();
    } else {
      this.authService.currentUser$.pipe(
        switchMap((user: User) => this.fakeApi.createCall$(user._id, call)),
        take(1),
        tap((newCall: CallForData): CallForData => this.cfdService.currentCall = newCall)
      ).subscribe();
    }
  }

  onCallCreateFinish(): void {
    this.router.navigate(['consumer', 'calls-for-data']);
  }
}
