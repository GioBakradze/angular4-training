import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0101Component } from './demo-01-01.component';

describe('Demo0101Component', () => {
  let component: Demo0101Component;
  let fixture: ComponentFixture<Demo0101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
