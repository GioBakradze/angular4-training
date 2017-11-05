import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0702Component } from './demo-07-02.component';

describe('Demo0702Component', () => {
  let component: Demo0702Component;
  let fixture: ComponentFixture<Demo0702Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0702Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0702Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
