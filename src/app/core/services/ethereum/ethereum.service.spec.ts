import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';

import { EthereumService } from './ethereum.service';

describe('EthereumService', () => {
  let service: EthereumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, SharedModule]
    });
    service = TestBed.inject(EthereumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
