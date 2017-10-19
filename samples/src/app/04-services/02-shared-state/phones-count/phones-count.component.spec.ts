import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesCountComponent } from './phones-count.component';

describe('PhonesCountComponent', () => {
  let component: PhonesCountComponent;
  let fixture: ComponentFixture<PhonesCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
