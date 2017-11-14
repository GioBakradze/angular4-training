import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appOtherDirective]'
})
export class OtherDirectiveDirective implements OnInit {

    @HostBinding('style.backgroundColor') bgColor: string;

    constructor() {
    }

    ngOnInit() {
        this.bgColor = 'red';
    }
}
