import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0103Component } from './demo-01-03.component';

describe('Demo0103Component', () => {
  let component: Demo0103Component;
  let fixture: ComponentFixture<Demo0103Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0103Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
