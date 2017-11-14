import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1203Component } from './demo-12-03.component';

describe('Demo1203Component', () => {
  let component: Demo1203Component;
  let fixture: ComponentFixture<Demo1203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
