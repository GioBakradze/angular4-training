import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
    selector: 'app-demo-01-01',
    templateUrl: './demo-01-01.component.html',
    styleUrls: ['./demo-01-01.component.css']
})
export class Demo0101Component {

    constructor() {

        const gio: Person = new Person('gio', 25, 'programmer', 3);

        console.log(gio.age);
        gio.getOlder();
        console.log(gio.age);
        console.log(gio.getProfession());

    }

}
