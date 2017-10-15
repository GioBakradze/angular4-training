import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-03-01',
    templateUrl: './demo-03-01.component.html',
    styleUrls: ['./demo-03-01.component.css']
})
export class Demo0301Component implements OnInit {

    personName: string;
    personAge: number;

    message: string;

    constructor() {
        this.personName = 'cangala';
        this.personAge = 23;

        // TODO: add array of persons
    }

    ngOnInit() {
    }

    someoneGotRich(name: string): void {
        this.message = `${name} got rich`;
    }

}
