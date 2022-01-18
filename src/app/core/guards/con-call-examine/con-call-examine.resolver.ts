import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CallForData } from '../../interfaces/call-for-data';
import { FakeApiService } from '../../services/fake-api/fake-api.service';

@Injectable({
  providedIn: 'root'
})
export class ConCallExamineResolver implements Resolve<CallForData> {
  constructor(private fakeApi: FakeApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CallForData> {
    return this.fakeApi.getCall$(route.params.id);
  }
}
