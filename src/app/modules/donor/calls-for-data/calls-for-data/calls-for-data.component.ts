import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take, switchMap, tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-calls-for-data',
  templateUrl: './calls-for-data.component.html',
  styleUrls: ['./calls-for-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallsForDataComponent implements OnInit {
  public allCalls: CallForData[] = [];

  constructor(
    private authService: AuthenticationService,
    private cdr: ChangeDetectorRef,
    private fakeApi: FakeApiService,
    private router: Router,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.searchCalls();
  }

  onJoin(callId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { autoFocus: false });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) { return; }

      this.fakeApi.joinCall$(this.authService.currentUser$.value._id, callId).pipe(
        tap(() => this.searchCalls()),
        tap(() => this.cdr.detectChanges())
      ).subscribe();
    });
  }

  onView(callId: string): void {
    this.router.navigate([ 'donor', 'examine', callId ]);
  }

  public searchCalls(query?: string): void {
    this.authService.currentUser$.pipe(
      take(1),
      switchMap(
        (user: User) => this.fakeApi.getAllCalls$(user._id, query)
      ),
      tap((list: CallForData[]) => this.allCalls = list),
      tap(() => this.cdr.detectChanges())
    ).subscribe();
  }

  public clearSearch(): void {
    this.searchCalls();
  }
}
