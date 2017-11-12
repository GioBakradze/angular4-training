import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-demo-10-02',
    templateUrl: './demo-10-02.component.html',
    styleUrls: ['./demo-10-02.component.css']
})
export class Demo1002Component {

    list: Subject<any>;

    constructor() {
        this.list = new Subject<any>();

        setTimeout(() => {
            this.list.next([
                'val 1',
                'val 2',
                'val 3',
                'val 4'
            ]);
        }, 2000);

        setTimeout(() => {
            this.list.next([
                'val 1',
                'val 2'
            ]);
        }, 5000);
    }

}
