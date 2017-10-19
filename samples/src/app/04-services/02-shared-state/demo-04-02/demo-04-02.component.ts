import { Component } from '@angular/core';
import { PhoneBookService } from '../phone-book.service';

@Component({
    selector: 'app-demo-04-02',
    templateUrl: './demo-04-02.component.html',
    styleUrls: ['./demo-04-02.component.css'],
    providers: [PhoneBookService]
})
export class Demo0402Component {

    constructor() {
    }

}
