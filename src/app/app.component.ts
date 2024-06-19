import { AsyncPipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BoldDirective } from './bold.directive';
import { SomethingComponent } from './something/something.component';
import { TestService1Service } from './test-service1.service';
import { TEST_OBSERVABLE_TOKEN } from './app.config';
import { TestService3Service } from './test-service3.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule, ReactiveFormsModule, BoldDirective, SomethingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [TestService1Service],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'trash2';

  data1 = "hello"

  data2 = "world"

  testarray = [12, 15, 74, 17, 68]

  testSubject = new BehaviorSubject(this.testarray)

  testSignal = signal(this.testarray)

  flagSignal = signal(false)

  testForm = new FormGroup({
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  
  @ViewChild("test")
  element: ElementRef | undefined;

  private testService1 = inject(TestService1Service);

  private testService3 = inject(TestService3Service);


  private observableToken = inject(TEST_OBSERVABLE_TOKEN);

  constructor () {
    setTimeout(() => {
      localStorage.setItem('tokenTest', '1111ghjrtoiibjfoithjk')

      this.testarray.push(777)

      this.testSubject.next(this.testarray)

      this.testSignal.set(this.testarray)

      this.testSignal.update((value) => {
        value.push(777)

        return value
      })

      this.observableToken.next('11290321093801928')
    }, 5000)

    const data = this.testService3.getData()


    console.log(data, 123123)
    this.testService1.test();

    setTimeout(() => {
      this.flagSignal.set(true)
    }, 3000)

    console.log(this.testService1.testData1)
    this.testService1.testData1 += 1;
    console.log(this.testService1.testData1)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.element) return
      this.element.nativeElement.innerText = "new text"
    }, 5000)

    console.log(this.element)
  }

  login() {
    console.log(this.testForm.getRawValue())
  }

  eventReact(text: string) {
    console.log(text)
  }
}
