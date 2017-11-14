import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-demo-12-01',
    templateUrl: './demo-12-01.component.html',
    styleUrls: ['./demo-12-01.component.css'],
    animations: [
        trigger('simpleState', [
            state('start', style({
                'background-color': 'red',
                'margin-left': '0px'
            })),
            state('end', style({
                'background-color': 'green',
                'margin-left': '500px'
            })),
            transition('start <=> end', animate(300))
            // transition('start => end', animate(300)),
            // transition('end => start', animate(900))
        ])
    ]
})
export class Demo1201Component implements OnInit {

    state: string;

    constructor() {
        this.state = 'start';
    }

    ngOnInit() {
    }

}
