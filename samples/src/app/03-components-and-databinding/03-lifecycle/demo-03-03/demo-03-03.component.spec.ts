import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0303Component } from './demo-03-03.component';

describe('Demo0303Component', () => {
  let component: Demo0303Component;
  let fixture: ComponentFixture<Demo0303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
