import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0604Component } from './demo-06-04.component';

describe('Demo0604Component', () => {
  let component: Demo0604Component;
  let fixture: ComponentFixture<Demo0604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
