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
    private fakeApi: FakeApiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.call$ = this.fakeApi.getCall$(this.activateRoute.snapshot.params.id);
  }

  onSave(call: CallForData): void {
    this.fakeApi.updateCall$(call).pipe(
      tap((): Promise<boolean> => this.router.navigate(['consumer', 'calls-for-data']))
    ).subscribe();
  }
}
