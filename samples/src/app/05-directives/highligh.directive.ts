import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighligh]'
})
export class HighlighDirective implements OnInit {
    @Input() defaultColor = 'transparent';
    @Input() highlighColor = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor() {
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = this.highlighColor;
    }

    @HostListener('mouseleave') mouseout() {
        this.backgroundColor = this.defaultColor;
    }

}
