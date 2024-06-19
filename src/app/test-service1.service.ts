import { Injectable } from '@angular/core';
import { TestService3Service } from './test-service3.service';

@Injectable()
export class TestService1Service {
  testData1 = 'Some1';

  constructor(private testServ3: TestService3Service) { }

  test() {
    this.testServ3.setData()
  }
}
