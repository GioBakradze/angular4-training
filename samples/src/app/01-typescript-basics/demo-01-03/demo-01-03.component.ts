import { Component } from '@angular/core';
import { Person } from '../person';
import { GenericSorter } from '../generic-sorter';

@Component({
    selector: 'app-demo-01-03',
    templateUrl: './demo-01-03.component.html',
    styleUrls: ['./demo-01-03.component.css']
})
export class Demo0103Component {

    constructor() {
        const gio: Person = new Person('gio', 25, 'programmer', 3);
        const dachi: Person = new Person('dachi', 25, 'civil engineer', 2);
        const elene: Person = new Person('elene', 24, 'designer', 6);

        const sorter: GenericSorter<Person> = new GenericSorter<Person>([
            gio,
            dachi,
            elene
        ]);

        console.log(sorter.lowest());
        console.log(sorter.highest());
        console.log(sorter.sorted());
    }

}
