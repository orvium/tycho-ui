import {TestBed} from '@angular/core/testing';
import {SharedModule} from 'src/app/shared/shared.module';

import {FakeApiService} from './fake-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FakeApiService', () => {
  let service: FakeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule]
    });
    service = TestBed.inject(FakeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
