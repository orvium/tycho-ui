import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Consumer} from 'src/app/core/interfaces/consumer';
import {Donor} from 'src/app/core/interfaces/donor';
import {environment} from '../../../../environments/environment';
import {Role} from '../../enums/role.enum';
import {CallDonorInfo} from '../../interfaces/call-donor-info';
import {CallForData} from '../../interfaces/call-for-data';
import {DonorDataset, DonorDatasetPopulated} from '../../interfaces/donor-dataset';
import {Notification} from '../../interfaces/notification';
import {User} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  constructor(private http: HttpClient) {
  }

  login$(email: string, password: string, role: Role): Observable<User> {
    return this.http.post<User>(`${environment.apiEndpoint}/login`, {email, password, role});
  }

  getMyCallsAsDonor$(donorId: string, query?: string): Observable<CallForData[]> {
    const params = query ? new HttpParams().set('query', query) : {};

    return this.http.get<CallForData[]>(
      `${environment.apiEndpoint}/donor/${donorId}/my-calls`, {params}
    );
  }

  getMyCallsAsConsumer$(consumerId: string, query?: string): Observable<CallForData[]> {
    const params = query ? new HttpParams().set('query', query) : {};

    return this.http.get<CallForData[]>(
      `${environment.apiEndpoint}/consumer/${consumerId}/my-calls`, {params}
    );
  }

  getAllCalls$(donorId: string, query?: string): Observable<CallForData[]> {
    const params = query ? new HttpParams().set('query', query) : {};

    return this.http.get<CallForData[]>(
      `${environment.apiEndpoint}/donor/${donorId}/without-me`, {params}
    );
  }

  getCall$(callId: string): Observable<CallForData> {
    return this.http.get<CallForData>(`${environment.apiEndpoint}/call/${callId}`);
  }

  joinCall$(donorId: string, callId: string): Observable<void> {
    return this.http.post<void>(
      `${environment.apiEndpoint}/call/${callId}/join`, {donorId}
    );
  }

  revokeCall$(donorId: string, callId: string): Observable<void> {
    return this.http.post<void>(
      `${environment.apiEndpoint}/call/${callId}/revoke`, {donorId}
    );
  }

  getDonorsInfo$(consumerId: string): Observable<CallDonorInfo[]> {
    return this.http.get<CallDonorInfo[]>(
      `${environment.apiEndpoint}/consumer/${consumerId}/my-donors`
    );
  }

  createCall$(consumerId: string, call: CallForData): Observable<CallForData> {
    return this.http.post<CallForData>(`${environment.apiEndpoint}/call`, {consumerId, call});
  }

  updateCall$(updatedCall: CallForData): Observable<CallForData> {
    return this.http.patch<CallForData>(
      `${environment.apiEndpoint}/call/${updatedCall._id}`, updatedCall
    );
  }

  updateDonorProfile$(newDonor: Donor): Observable<Donor> {
    return this.http.patch<Donor>(
      `${environment.apiEndpoint}/donor/${newDonor._id}`, newDonor
    );
  }

  updateConsumerProfile$(newConsumer: Consumer): Observable<Consumer> {
    return this.http.patch<Consumer>(
      `${environment.apiEndpoint}/consumer/${newConsumer._id}`, newConsumer
    );
  }

  getUsersNotifications$(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiEndpoint}/notifications/${userId}`).pipe(
      map((notifications: Notification[]): Notification[] => {
        const sorted: Notification[] = notifications.sort(
          (notification1: Notification, notification2: Notification): number =>
            new Date(notification2.createdOn).valueOf() -
            new Date(notification1.createdOn).valueOf()
        );

        return sorted;
      })
    );
  }

  removeNotification$(
    userId: string, notificationId: string
  ): Observable<Notification[]> {
    return this.http.delete<Notification[]>(
      `${environment.apiEndpoint}/notifications/${userId}/remove/${notificationId}`
    );
  }

  markAsReadNotification$(notificationId: string): Observable<Notification> {
    return this.http.post<Notification>(
      `${environment.apiEndpoint}/notifications/${notificationId}/read`,
      {});
  }

  getDonorDatasetsFromCall$(donorId: string, callId: string): Observable<DonorDataset[]> {
    return this.http.get<DonorDataset[]>(
      `${environment.apiEndpoint}/donor-dataset/donor/${donorId}/${callId}`
    );
  }

  getCallsDonors$(callId: string): Observable<Donor[]> {
    return this.http.get<Donor[]>(
      `${environment.apiEndpoint}/call/${callId}/donors`
    );
  }

  getAllCallDatasets$(callId: string): Observable<DonorDataset[]> {
    return this.http.get<DonorDataset[]>(
      `${environment.apiEndpoint}/donor-dataset/call/${callId}`
    );
  }

  getAllDatasets$(query: string, tags?: string): Observable<DonorDatasetPopulated[]> {
    let params = new HttpParams();
    if (query) { params = params.set('query', query); }
    if (tags) { params = params.set('tags', tags); }

    return this.http.get<DonorDatasetPopulated[]>(
      `${environment.apiEndpoint}/donor-dataset`, {params}
    );
  }

  getDatasetTags$(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiEndpoint}/donor-dataset/tags`);
  }
}
