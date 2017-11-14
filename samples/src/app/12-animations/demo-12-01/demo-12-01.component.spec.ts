import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1201Component } from './demo-12-01.component';

describe('Demo1201Component', () => {
  let component: Demo1201Component;
  let fixture: ComponentFixture<Demo1201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
