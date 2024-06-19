import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TestService1Service } from './test-service1.service';
import { TestService2Service } from './test-service2.service';
import { BehaviorSubject } from 'rxjs';

export const TEST_OBSERVABLE_TOKEN = new InjectionToken<BehaviorSubject<string>>('test behavior subject token', {
  providedIn: 'root',
  factory() {
    return new BehaviorSubject<string>('asdasd')
  },
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TestService1Service, useClass: TestService2Service},
    {provide: 'API_URL', useValue: 'googleasdasd.com'},
    {provide: 'TEST_DATA_TOKEN', useFactory: () => localStorage.getItem('tokenTest')},
  ]
};
