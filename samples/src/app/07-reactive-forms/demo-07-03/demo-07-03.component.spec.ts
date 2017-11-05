import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0703Component } from './demo-07-03.component';

describe('Demo0703Component', () => {
  let component: Demo0703Component;
  let fixture: ComponentFixture<Demo0703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
