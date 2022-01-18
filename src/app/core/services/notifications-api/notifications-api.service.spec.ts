import {TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from 'src/app/shared/shared.module';

import {NotificationsApiService} from './notifications-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NotificationsApiService', () => {
  let service: NotificationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, BrowserAnimationsModule, RouterTestingModule]
    });
    service = TestBed.inject(NotificationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
