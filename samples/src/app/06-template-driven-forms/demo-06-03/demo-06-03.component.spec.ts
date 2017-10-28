import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0603Component } from './demo-06-03.component';

describe('Demo0603Component', () => {
  let component: Demo0603Component;
  let fixture: ComponentFixture<Demo0603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
