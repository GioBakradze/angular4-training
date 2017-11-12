import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1002Component } from './demo-10-02.component';

describe('Demo1002Component', () => {
  let component: Demo1002Component;
  let fixture: ComponentFixture<Demo1002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
