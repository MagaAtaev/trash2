import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingComponent } from './something.component';

describe('SomethingComponent', () => {
  let component: SomethingComponent;
  let fixture: ComponentFixture<SomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomethingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
