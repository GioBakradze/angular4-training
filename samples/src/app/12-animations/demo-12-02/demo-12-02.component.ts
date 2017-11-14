import { Component } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-demo-12-02',
    templateUrl: './demo-12-02.component.html',
    styleUrls: ['./demo-12-02.component.css'],
    animations: [
        trigger('complexState', [
            state('start', style({
                'background-color': 'red',
                'margin-left': '0px'
            })),
            state('end', style({
                'background-color': 'green',
                'margin-left': '500px'
            })),
            transition('start <=> end', [
                style({
                    border: '20px solid yellow',
                    transform: 'scale(1)'
                }),
                animate(1000, style({
                    border: '20px solid blue',
                    transform: 'scale(0.5)'
                })),
                animate(1000, style({
                    border: '20px solid blue',
                    transform: 'scale(1.5)'
                })),
                animate(500)
            ])
        ])
    ]
})
export class Demo1202Component {
    state: string;

    constructor() {
        this.state = 'start'
    }

}
