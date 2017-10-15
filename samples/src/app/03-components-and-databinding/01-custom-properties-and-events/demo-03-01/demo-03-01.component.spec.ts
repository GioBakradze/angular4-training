import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0301Component } from './demo-03-01.component';

describe('Demo0301Component', () => {
  let component: Demo0301Component;
  let fixture: ComponentFixture<Demo0301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
