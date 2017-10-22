import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0501Component } from './demo-05-01.component';

describe('Demo0501Component', () => {
  let component: Demo0501Component;
  let fixture: ComponentFixture<Demo0501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
