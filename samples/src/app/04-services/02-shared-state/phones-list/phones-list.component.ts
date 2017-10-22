import { Component } from '@angular/core';
import { PhoneBookService } from '../phone-book.service';

@Component({
    selector: 'app-phones-list',
    templateUrl: './phones-list.component.html',
    styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent {

    constructor(public phoneBookService: PhoneBookService) {
    }

    remove(i: number) {
        if (confirm('Do you want to delete?')) {
            this.phoneBookService.removeEntry(i);
        }
    }

}
