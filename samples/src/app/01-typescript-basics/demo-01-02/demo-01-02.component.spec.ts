import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0102Component } from './demo-01-02.component';

describe('Demo0102Component', () => {
  let component: Demo0102Component;
  let fixture: ComponentFixture<Demo0102Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0102Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
