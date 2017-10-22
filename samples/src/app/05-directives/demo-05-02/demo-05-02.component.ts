import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-05-02',
    templateUrl: './demo-05-02.component.html',
    styleUrls: ['./demo-05-02.component.css']
})
export class Demo0502Component implements OnInit {

    show: boolean;

    constructor() {
        this.show = true;
    }

    ngOnInit() {
    }

}
