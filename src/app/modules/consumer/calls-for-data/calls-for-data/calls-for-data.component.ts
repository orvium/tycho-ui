import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { take, switchMap, tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-calls-for-data',
  templateUrl: './calls-for-data.component.html',
  styleUrls: ['./calls-for-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallsForDataComponent implements OnInit {
  public calls: CallForData[] = [];

  constructor(
    private authService: AuthenticationService,
    private cdr: ChangeDetectorRef,
    private fakeApi: FakeApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.searchCalls();
  }

  onEdit(callId: string): void {
    this.router.navigate([ 'consumer', 'edit', callId ]);
  }

  onAddNew(): void {
    this.router.navigate([ 'consumer', 'create' ]);
  }

  onView(callId: string): void {
    this.router.navigate([ 'consumer', 'examine', callId ]);
  }

  public searchCalls(query?: string): void {
    this.authService.currentUser$.pipe(
      take(1),
      switchMap(
        (user: User) => this.fakeApi.getMyCallsAsConsumer$(user._id, query)
      ),
      tap((calls: CallForData[]) => this.calls = calls),
      tap(() => this.cdr.detectChanges())
    ).subscribe();
  }

  public clearSearch(): void {
    this.searchCalls();
  }
}
