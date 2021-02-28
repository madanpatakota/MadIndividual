import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCusTemComponent } from './create-cus-tem.component';

describe('CreateCusTemComponent', () => {
  let component: CreateCusTemComponent;
  let fixture: ComponentFixture<CreateCusTemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCusTemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCusTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
