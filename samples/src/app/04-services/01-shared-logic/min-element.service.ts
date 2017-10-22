import { Injectable } from '@angular/core';

@Injectable()
export class MinElementService<T> {

    constructor() {
    }

    findMin(list: Array<T>, comparator: (a, b) => number): T {
        return list.slice().sort(comparator)[0];
    }

}
