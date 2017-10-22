import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Min1Component } from './min-1.component';

describe('Min1Component', () => {
  let component: Min1Component;
  let fixture: ComponentFixture<Min1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Min1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Min1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
