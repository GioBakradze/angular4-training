import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-demo-09-02',
    templateUrl: './demo-09-02.component.html',
    styleUrls: ['./demo-09-02.component.css']
})
export class Demo0902Component {
    text: string;

    simpleSubject: Subject<any>;
    simpleBehaviorSubject: BehaviorSubject<any>;

    constructor() {
        this.simpleSubject = new Subject<any>();
        this.simpleBehaviorSubject = new BehaviorSubject<any>(null);

        this.simpleSubject
            .subscribe(val => {
                console.log('regular', val);
            });

        this.simpleBehaviorSubject
            .subscribe((val) => {
                console.log('behavior', val);
            });
    }

    clicked() {
        this.simpleSubject.next(this.text);
        this.simpleBehaviorSubject.next(this.text);
    }

    subscribeLater() {
        this.simpleSubject
            .subscribe(val => {
                console.log('later regular', val);
            });

        this.simpleBehaviorSubject
            .subscribe((val) => {
                console.log('later behavior', val);
            });
    }

}
