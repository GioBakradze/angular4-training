import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-03-03',
    templateUrl: './demo-03-03.component.html',
    styleUrls: ['./demo-03-03.component.css']
})
export class Demo0303Component implements OnInit {

    list: Array<{ type: string, title: string, content: string }>;

    constructor() {

        this.list = [];

        for (let i = 1; i <= 10; i++) {
            this.list.push({
                type: 'danger',
                title: `title ${i}`,
                content: `content ${i}`
            });
        }

    }

    ngOnInit() {
    }

}
