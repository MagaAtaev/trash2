import { TestBed } from '@angular/core/testing';

import { TestService2Service } from './test-service2.service';

describe('TestService2Service', () => {
  let service: TestService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
