import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1202Component } from './demo-12-02.component';

describe('Demo1202Component', () => {
  let component: Demo1202Component;
  let fixture: ComponentFixture<Demo1202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
