import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0605Component } from './demo-06-05.component';

describe('Demo0605Component', () => {
  let component: Demo0605Component;
  let fixture: ComponentFixture<Demo0605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
