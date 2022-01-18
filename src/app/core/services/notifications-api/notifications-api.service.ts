import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, timer } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Notification } from '../../interfaces/notification';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../authentication/authentication.service';
import { FakeApiService } from '../fake-api/fake-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsApiService implements OnDestroy {
  notifications$: BehaviorSubject<Notification[]>;
  destroy: Subject<void>;

  constructor(
    private authApi: AuthenticationService,
    private fakeApi: FakeApiService,
  ) {
    this.destroy = new Subject();
    this.notifications$ = new BehaviorSubject(null);

    timer(1000, 10000).pipe(
      switchMap(tick => this.authApi.currentUser$),
      switchMap((user: User) => {
        if (user) { return this.fakeApi.getUsersNotifications$(user._id); }
        else { return of([]); }
      }),
      tap((notifications: Notification[]) => this.notifications$.next(notifications)),
      takeUntil(this.destroy)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  removeNotification(
    userId: string, notificationId: string
  ): Observable<Notification[]> {
    return this.fakeApi.removeNotification$(userId, notificationId);
  }

  markAsRead$(notificationId: string): Observable<Notification> {
    return this.fakeApi.markAsReadNotification$(notificationId);
  }
}
