import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPanelComponent } from './other-panel.component';

describe('OtherPanelComponent', () => {
  let component: OtherPanelComponent;
  let fixture: ComponentFixture<OtherPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
