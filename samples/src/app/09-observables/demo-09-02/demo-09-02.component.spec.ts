import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0902Component } from './demo-09-02.component';

describe('Demo0902Component', () => {
  let component: Demo0902Component;
  let fixture: ComponentFixture<Demo0902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
