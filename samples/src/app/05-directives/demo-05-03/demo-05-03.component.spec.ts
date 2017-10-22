import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0503Component } from './demo-05-03.component';

describe('Demo0503Component', () => {
  let component: Demo0503Component;
  let fixture: ComponentFixture<Demo0503Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0503Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
