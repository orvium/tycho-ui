import { Injectable } from '@angular/core';
import { CallForData } from '../../interfaces/call-for-data';

@Injectable({
  providedIn: 'root'
})
export class CallForDataService {
  private CurrentCall: CallForData;

  constructor() {}

  get currentCall(): CallForData { return this.CurrentCall; }
  set currentCall(call: CallForData) { this.CurrentCall = call; }
}
