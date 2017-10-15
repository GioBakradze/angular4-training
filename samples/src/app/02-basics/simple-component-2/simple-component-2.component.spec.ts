import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent2Component } from './simple-component-2.component';

describe('SimpleComponent2Component', () => {
    let component: SimpleComponent2Component;
    let fixture: ComponentFixture<SimpleComponent2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleComponent2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleComponent2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
