import { TestBed } from '@angular/core/testing';

import { DonorDatasetApiService } from './donor-dataset-api.service';

describe('DonorDatasetApiService', () => {
  let service: DonorDatasetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorDatasetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
