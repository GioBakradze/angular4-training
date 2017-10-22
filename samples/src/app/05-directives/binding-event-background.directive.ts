import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appBindingEventBackground]'
})
export class BindingEventBackgroundDirective {

    @HostBinding('style.backgroundColor') backgroundColor: string;
    @HostBinding('style.color') color: string;

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = 'blue';
        this.color = 'white';
    }

    @HostListener('mouseleave') mouseout() {
        this.backgroundColor = 'transparent';
        this.color = '#333';
    }

}
