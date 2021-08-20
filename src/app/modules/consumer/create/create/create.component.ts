import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, take, tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { User } from 'src/app/core/interfaces/user';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService,
    private _fakeApi: FakeApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSave(call: CallForData): void {
    this._authService.currentUser$.pipe(
      switchMap((user: User) => this._fakeApi.createCall$(user._id, call)),
      take(1),
      tap((): Promise<boolean> => this._router.navigate(['consumer', 'view']))
    ).subscribe();
  }
}
