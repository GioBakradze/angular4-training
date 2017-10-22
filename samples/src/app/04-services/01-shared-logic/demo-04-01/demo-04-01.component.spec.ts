import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo0401Component } from './demo-04-01.component';

describe('Demo0401Component', () => {
  let component: Demo0401Component;
  let fixture: ComponentFixture<Demo0401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo0401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo0401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
