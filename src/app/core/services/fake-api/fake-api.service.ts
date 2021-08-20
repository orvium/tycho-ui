import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/core/interfaces/consumer';
import { Donor } from 'src/app/core/interfaces/donor';
import { Role } from '../../enums/role.enum';
import { CallDonorInfo } from '../../interfaces/call-donor-info';
import { CallForData } from '../../interfaces/call-for-data';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  api: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  login$(email: string, password: string, role: Role) {
    return this._http.post(`${ this.api }/login`, { email, password, role });
  }

  getMyCallsAsDonor$(donorId: string): Observable<CallForData[]> {
    return this._http.get<CallForData[]>(
      `${ this.api }/donor/${ donorId }/my-calls`
    );
  }

  getMyCallsAsConsumer$(consumerId: string): Observable<CallForData[]> {
    return this._http.get<CallForData[]>(
      `${ this.api }/consumer/${ consumerId }/my-calls`
    );
  }

  getAllCalls$(donorId: string): Observable<CallForData[]> {
    return this._http.get<CallForData[]>(
      `${ this.api }/donor/${ donorId }/without-me`
    );
  }

  getCall$(callId: string): Observable<CallForData> {
    return this._http.get<CallForData>(`${ this.api }/call/${ callId }`);
  }

  joinCall$(donorId: string, callId: string): Observable<void> {
    return this._http.post<void>(
      `${ this.api }/call/${ callId }/join`, { donorId }
    );
  }

  revokeCall$(donorId: string, callId: string): Observable<void> {
    return this._http.post<void>(
      `${ this.api }/call/${ callId }/revoke`, { donorId }
    );
  }

  getDonorsInfo$(consumerId: string): Observable<CallDonorInfo[]> {
    return this._http.get<CallDonorInfo[]>(
      `${ this.api }/consumer/${ consumerId }/my-donors`
    );
  }

  createCall$(consumerId: string, call: CallForData): Observable<CallForData> {
    return this._http.post<CallForData>(`${ this.api }/call`, { consumerId, call });
  }

  updateCall$(updatedCall: CallForData): Observable<CallForData> {
    return this._http.patch<CallForData>(
      `${ this.api }/call/${ updatedCall._id }`, updatedCall
    );
  }

  updateDonorProfile$(newDonor: Donor): Observable<Donor> {
    return this._http.patch<Donor>(
      `${ this.api }/donor/${ newDonor._id }`, newDonor
    );
  }

  updateConsumerProfile$(newConsumer: Consumer): Observable<Consumer> {
    return this._http.patch<Consumer>(
      `${ this.api }/consumer/${ newConsumer._id }`, newConsumer
    );
  }
}
