import { Component } from '@angular/core';
import { Person } from '../person';
import { Robot } from '../robot';
import { SpaceshipFacility } from '../spaceship-facility';

@Component({
    selector: 'app-demo-01-02',
    templateUrl: './demo-01-02.component.html',
    styleUrls: ['./demo-01-02.component.css']
})
export class Demo0102Component {

    constructor() {
        const gio: Person = new Person('gio', 25, 'programmer', 3);
        const robot: Robot = new Robot('very_long_robot_id');

        const facility: SpaceshipFacility = new SpaceshipFacility(
            [
                'change oil',
                'clean spaceship',
                'build new spaceship prototype'
            ],
            gio
        );
        facility.completeTasks();

        facility.setWorker(robot);
        facility.completeTasks();
    }

}
