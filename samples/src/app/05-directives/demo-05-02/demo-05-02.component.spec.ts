import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0502Component } from './demo-05-02.component';

describe('Demo0502Component', () => {
  let component: Demo0502Component;
  let fixture: ComponentFixture<Demo0502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
