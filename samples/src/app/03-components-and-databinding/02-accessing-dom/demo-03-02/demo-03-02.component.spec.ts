import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0302Component } from './demo-03-02.component';

describe('Demo0302Component', () => {
  let component: Demo0302Component;
  let fixture: ComponentFixture<Demo0302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
