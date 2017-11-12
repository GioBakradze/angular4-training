import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1001Component } from './demo-10-01.component';

describe('Demo1001Component', () => {
  let component: Demo1001Component;
  let fixture: ComponentFixture<Demo1001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
