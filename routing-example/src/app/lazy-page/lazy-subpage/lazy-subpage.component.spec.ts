import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySubpageComponent } from './lazy-subpage.component';

describe('LazySubpageComponent', () => {
  let component: LazySubpageComponent;
  let fixture: ComponentFixture<LazySubpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazySubpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
