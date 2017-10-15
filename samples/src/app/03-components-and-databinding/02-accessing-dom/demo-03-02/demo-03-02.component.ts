import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-demo-03-02',
    templateUrl: './demo-03-02.component.html',
    styleUrls: ['./demo-03-02.component.css']
})
export class Demo0302Component implements OnInit {

    @ViewChild('textField') input: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    show(input: HTMLInputElement) {
        alert(input.value);
        console.log(input);
    }

    showWithViewChild() {
        alert(this.input.nativeElement.value);
        console.log(this.input.nativeElement);
    }

}
