import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0402Component } from './demo-04-02.component';

describe('Demo0402Component', () => {
  let component: Demo0402Component;
  let fixture: ComponentFixture<Demo0402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
