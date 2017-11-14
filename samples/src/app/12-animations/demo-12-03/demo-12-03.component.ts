import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'app-demo-12-03',
    templateUrl: './demo-12-03.component.html',
    styleUrls: ['./demo-12-03.component.css'],
    animations: [
        trigger('listTrigger', [
            state('initial', style({
                'transform': 'translateX(0)',
                'opacity': '1'
            })),
            transition('void => *', [
                style({
                    'transform': 'translateX(-100px)',
                    'opacity': '0'
                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(1000, style({
                    'transform': 'translateX(50px)',
                    'opacity': '0.5'
                })),
                animate(100, style({
                    'transform': 'translateX(+100px)',
                    'opacity': '0'
                }))
            ])
            // transition('* => void', [
            //     animate(1500, keyframes([
            //         style({
            //             'transform': 'translateX(0px)',
            //             'opacity': '0'
            //         }),
            //         style({
            //             transform: 'translateX(50px)',
            //             opacity: '0.5',
            //             background: 'red'
            //         }),
            //         style({
            //             transform: 'translateX(100px)',
            //             opacity: '0.5',
            //             background: 'yellow'
            //         })
            //     ]))
            // ])
        ])
    ]
})
export class Demo1203Component implements OnInit {

    text: string;
    list: string[];

    constructor() {
        this.list = [];
    }

    ngOnInit() {
    }

}
