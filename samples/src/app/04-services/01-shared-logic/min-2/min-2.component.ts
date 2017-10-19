import { Component } from '@angular/core';
import { MinElementService } from '../min-element.service';


@Component({
    selector: 'app-min-2',
    templateUrl: './min-2.component.html',
    styleUrls: ['./min-2.component.css'],
    providers: [MinElementService]
})
export class Min2Component {

    constructor(private minElementService: MinElementService<number>) {

        const nums: Array<number> = [5, 10, 27, 12, -2];
        const min = this.minElementService.findMin(nums, (a, b) => a - b);
        console.log('component 2', min);
    }

}
