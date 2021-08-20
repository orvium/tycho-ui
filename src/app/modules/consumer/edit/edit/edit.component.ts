import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  call$: Observable<CallForData>;

  constructor(
    private _fakeApi: FakeApiService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.call$ = this._fakeApi.getCall$(this._activateRoute.snapshot.params.id);
  }

  onSave(call: CallForData): void {
    this._fakeApi.updateCall$(call).pipe(
      tap((): Promise<boolean> => this._router.navigate(['consumer', 'view']))
    ).subscribe();
  }
}
