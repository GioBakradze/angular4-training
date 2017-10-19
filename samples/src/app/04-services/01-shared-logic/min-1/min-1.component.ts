import { Component } from '@angular/core';
import { MinElementService } from '../min-element.service';

class Person {
    constructor(private name: string, private age: number) {
    }
}

@Component({
    selector: 'app-min-1',
    templateUrl: './min-1.component.html',
    styleUrls: ['./min-1.component.css'],
    providers: [MinElementService]
})
export class Min1Component {

    constructor(private minElementService: MinElementService<Person>) {

        const people: Array<Person> = [
            new Person('gio', 25),
            new Person('dachi', 17),
            new Person('elene', 23),
            new Person('zura', 35)
        ];

        const min: Person = this.minElementService.findMin(people, (p1, p2) => {
            return p1.age - p2.age;
        });

        console.log('component 1', min);

    }

}
