import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';
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
  myCalls: CallForData[] = [];
  allCalls: CallForData[] = [];

  constructor(
    private _authService: AuthenticationService,
    private _cdr: ChangeDetectorRef,
    private _fakeApi: FakeApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getMyCalls();
    this.getAllCalls();
  }

  getMyCalls(): void {
    this._authService.currentUser$.pipe(
      take(1),
      switchMap((user: User) => this._fakeApi.getMyCallsAsDonor$(user._id)),
      tap((list: CallForData[]) => this.myCalls = list),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  getAllCalls(): void {
    this._authService.currentUser$.pipe(
      take(1),
      switchMap((user: User) => this._fakeApi.getAllCalls$(user._id)),
      tap((list: CallForData[]) => this.allCalls = list),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  onJoin(callId: string): void {
    this._fakeApi.joinCall$(this._authService.currentUser$.value._id, callId).pipe(
      tap(() => {
        this.getMyCalls();
        this.getAllCalls();
      }),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  onRevoke(callId: string): void {
    this._fakeApi.revokeCall$(this._authService.currentUser$.value._id, callId).pipe(
      tap(() => {
        this.getMyCalls();
        this.getAllCalls();
      }),
      tap(() => this._cdr.detectChanges())
    ).subscribe();
  }

  onView(callId: string): void {
    this._router.navigate([ 'donor', 'examine', callId ]);
  }
}
