import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo030302Component } from './demo-03-03-02.component';

describe('Demo030302Component', () => {
  let component: Demo030302Component;
  let fixture: ComponentFixture<Demo030302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo030302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo030302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
