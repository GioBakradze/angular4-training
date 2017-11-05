import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapRouteComponent } from './trap-route.component';

describe('TrapRouteComponent', () => {
  let component: TrapRouteComponent;
  let fixture: ComponentFixture<TrapRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
