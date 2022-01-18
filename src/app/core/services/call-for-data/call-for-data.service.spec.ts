import { TestBed } from '@angular/core/testing';

import { CallForDataService } from './call-for-data.service';

describe('CallForDataService', () => {
  let service: CallForDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallForDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
