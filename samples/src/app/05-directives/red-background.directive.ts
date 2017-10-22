import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appRedBackground]'
})
export class RedBackgroundDirective implements OnInit {

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }

}
