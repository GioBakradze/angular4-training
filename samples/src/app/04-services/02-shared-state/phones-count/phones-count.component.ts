import { Component } from '@angular/core';
import { PhoneBookService } from '../phone-book.service';

@Component({
    selector: 'app-phones-count',
    templateUrl: './phones-count.component.html',
    styleUrls: ['./phones-count.component.css']
})
export class PhonesCountComponent {

    constructor(public phoneBookService: PhoneBookService) {
    }

}
