import { Inject, Injectable } from '@angular/core';
import { TEST_OBSERVABLE_TOKEN } from './app.config';
import { BehaviorSubject } from 'rxjs';
import { TestService3Service } from './test-service3.service';

@Injectable()
export class TestService2Service {
  testData1 = 'Some2';

  constructor(
    @Inject('API_URL') private url: string,
    @Inject('TEST_DATA_TOKEN') private testToken: number,
    @Inject(TEST_OBSERVABLE_TOKEN) private observableToken: BehaviorSubject<string>,
    private testServ3: TestService3Service
  ) {
    console.log(this.url)
    console.log(this.testToken)

    this.observableToken.subscribe(data => console.log(data))
  }


  test() {
    this.testServ3.setData()
  }
}
