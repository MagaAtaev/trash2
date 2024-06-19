import { Injectable, Injector } from '@angular/core';
import { TestService1Service } from './test-service1.service';

@Injectable({
  providedIn: 'root'
})
export class TestService3Service {

  constructor(private injector: Injector) { }

  getData() {
    const data = this.injector.get(TestService1Service).testData1

    return data
  }

  setData() {
    console.log('!!!!!!')
  }
}
