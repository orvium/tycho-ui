import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';
import { CallDonorInfo } from 'src/app/core/interfaces/call-donor-info';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit {
  callDonorInfo: CallDonorInfo[] = [];
  calls: CallForData[] = [];

  constructor(
    private _authService: AuthenticationService,
    private _cdr: ChangeDetectorRef,
    private _fakeApi: FakeApiService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getDonorsInfo();
    this.getMyCalls();
  }

  getMyCalls(): void {
    this._authService.currentUser$.pipe(
      take(1),
      switchMap((user: User) => this._fakeApi.getMyCallsAsConsumer$(user._id)),
      tap((calls: CallForData[]) => this.calls = calls),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  getDonorsInfo(): void {
    this._authService.currentUser$.pipe(
      take(1),
      switchMap((user: User) => this._fakeApi.getDonorsInfo$(user._id)),
      tap((callDonorInfo: CallDonorInfo[]) => this.callDonorInfo = callDonorInfo),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  onEdit(callId: string): void {
    this._router.navigate([ 'consumer', 'edit', callId ]);
  }

  onAddNew(): void {
    this._router.navigate([ 'consumer', 'create' ]);
  }
}
