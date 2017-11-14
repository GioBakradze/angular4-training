import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPrivateComponentComponent } from './other-private-component.component';

describe('OtherPrivateComponentComponent', () => {
  let component: OtherPrivateComponentComponent;
  let fixture: ComponentFixture<OtherPrivateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPrivateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPrivateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
