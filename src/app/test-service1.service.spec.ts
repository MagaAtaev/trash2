import { TestBed } from '@angular/core/testing';

import { TestService1Service } from './test-service1.service';

describe('TestService1Service', () => {
  let service: TestService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
