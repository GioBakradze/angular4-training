import { Injectable } from '@angular/core';
import { PhoneEntry } from './phone-entry';

@Injectable()
export class PhoneBookService {

    private numbersList: Array<PhoneEntry>;

    constructor() {
        this.numbersList = [
            new PhoneEntry('gio', '555777888'),
            new PhoneEntry('elene', '666777888'),
            new PhoneEntry('zura', '111222333'),
            new PhoneEntry('tako', '444333999')
        ];
    }

    getNumbersList(): Array<PhoneEntry> {
        return this.numbersList;
    }

    removeEntry(index: number) {
        this.numbersList.splice(index, 1);
    }

    addEntry(entry: PhoneEntry) {
        this.numbersList.push(entry);
    }

    updateEntry(index: number, entry: PhoneEntry) {
        this.numbersList[index] = entry;
    }

}
