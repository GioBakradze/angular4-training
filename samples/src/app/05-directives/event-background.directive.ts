import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appEventBackground]'
})
export class EventBackgroundDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    @HostListener('mouseenter') mouseover() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }

    @HostListener('mouseleave') mouseout() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

}
