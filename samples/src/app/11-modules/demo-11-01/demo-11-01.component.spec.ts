import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1101Component } from './demo-11-01.component';

describe('Demo1101Component', () => {
  let component: Demo1101Component;
  let fixture: ComponentFixture<Demo1101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
