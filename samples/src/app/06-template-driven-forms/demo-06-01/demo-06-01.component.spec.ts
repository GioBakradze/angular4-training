import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0601Component } from './demo-06-01.component';

describe('Demo0601Component', () => {
  let component: Demo0601Component;
  let fixture: ComponentFixture<Demo0601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
