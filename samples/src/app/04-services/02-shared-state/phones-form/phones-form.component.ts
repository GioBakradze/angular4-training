import { Component } from '@angular/core';
import { PhoneBookService } from '../phone-book.service';
import { PhoneEntry } from '../phone-entry';

@Component({
    selector: 'app-phones-form',
    templateUrl: './phones-form.component.html',
    styleUrls: ['./phones-form.component.css']
})
export class PhonesFormComponent {

    name: string;
    number: string;

    constructor(private phoneBookService: PhoneBookService) {
    }

    add() {
        this.phoneBookService.addEntry(new PhoneEntry(this.name, this.number));
        this.name = '';
        this.number = '';
    }

}
