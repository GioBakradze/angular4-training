import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-10-01',
    templateUrl: './demo-10-01.component.html',
    styleUrls: ['./demo-10-01.component.css']
})
export class Demo1001Component {

    text: string;

    constructor() {
        this.text = 'Some Long Text';
    }

}
