import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0801Component } from './demo-08-01.component';

describe('Demo0801Component', () => {
  let component: Demo0801Component;
  let fixture: ComponentFixture<Demo0801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
