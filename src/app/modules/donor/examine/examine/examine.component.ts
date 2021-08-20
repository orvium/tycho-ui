import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CallForData } from 'src/app/core/interfaces/call-for-data';
import { FakeApiService } from 'src/app/core/services/fake-api/fake-api.service';

@Component({
  selector: 'app-examine',
  templateUrl: './examine.component.html',
  styleUrls: ['./examine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamineComponent implements OnInit {
  call$: Observable<CallForData>;

  constructor(
    private _fakeApi: FakeApiService,
    private _activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.call$ = this._fakeApi.getCall$(this._activateRoute.snapshot.params.id);
  }
}
