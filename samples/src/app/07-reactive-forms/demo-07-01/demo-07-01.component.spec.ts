import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0701Component } from './demo-07-01.component';

describe('Demo0701Component', () => {
  let component: Demo0701Component;
  let fixture: ComponentFixture<Demo0701Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0701Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
