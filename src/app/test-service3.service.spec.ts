import { TestBed } from '@angular/core/testing';

import { TestService3Service } from './test-service3.service';

describe('TestService3Service', () => {
  let service: TestService3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
