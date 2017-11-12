import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';

@Component({
    selector: 'app-demo-09-01',
    templateUrl: './demo-09-01.component.html',
    styleUrls: ['./demo-09-01.component.css']
})
export class Demo0901Component {

    text: string;
    anotherText: string;

    simpleSubject: Subject<any>;
    anotherSimpleSubject: Subject<any>;

    constructor() {
        this.simpleSubject = new Subject<any>();
        this.anotherSimpleSubject = new Subject<any>();

        this.simpleSubject
            .subscribe((val) => {
                console.log(val);
            });

        // this.simpleSubject
        //     .map(val => val.toUpperCase())
        //     .subscribe(val => {
        //         console.log(val);
        //     });
        //
        // this.simpleSubject
        //     .filter(val => val.length > 3)
        //     .subscribe(val => {
        //         console.log(val);
        //     });
        //
        // this.simpleSubject
        //     .combineLatest(this.anotherSimpleSubject)
        //     .subscribe(val => {
        //         console.log('combined', val);
        //     });
    }

    clicked() {
        this.simpleSubject.next(this.text);
    }

}
