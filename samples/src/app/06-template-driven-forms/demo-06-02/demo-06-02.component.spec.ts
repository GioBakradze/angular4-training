import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0602Component } from './demo-06-02.component';

describe('Demo0602Component', () => {
  let component: Demo0602Component;
  let fixture: ComponentFixture<Demo0602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
