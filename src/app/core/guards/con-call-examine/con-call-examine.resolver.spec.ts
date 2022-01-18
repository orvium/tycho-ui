import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ConCallExamineResolver } from './con-call-examine.resolver';

describe('ConCallExamineResolver', () => {
  let resolver: ConCallExamineResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    resolver = TestBed.inject(ConCallExamineResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
