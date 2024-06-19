import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TestService1Service } from '../test-service1.service';

@Component({
  selector: 'app-something',
  standalone: true,
  imports: [],
  templateUrl: './something.component.html',
  styleUrl: './something.component.scss',
  // providers: [TestService1Service],
})
export class SomethingComponent {
  @Input()
  value1!: string;

  @Input()
  value2!: string;

  @Output()
  testevent = new EventEmitter()

  private testService1 = inject(TestService1Service);


  constructor () {
    setTimeout(() => {
      this.testevent.emit("goodbye")
    }, 5000)

    console.log(this.testService1.testData1)
  }
}
