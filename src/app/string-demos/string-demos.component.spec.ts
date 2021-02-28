import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDemosComponent } from './string-demos.component';

describe('StringDemosComponent', () => {
  let component: StringDemosComponent;
  let fixture: ComponentFixture<StringDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
