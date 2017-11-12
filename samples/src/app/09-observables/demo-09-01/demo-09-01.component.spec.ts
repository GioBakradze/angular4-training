import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0901Component } from './demo-09-01.component';

describe('Demo0901Component', () => {
  let component: Demo0901Component;
  let fixture: ComponentFixture<Demo0901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
