import { Sortable } from './sortable';

export class GenericSorter<T extends Sortable> {

    constructor(private sortables: Array<T>) {

    }

    lowest(): T {
        return this.sortables.slice().sort((a: T, b: T) => a.numericValue() - b.numericValue())[0];
    }

    sorted(): Array<T> {
        return this.sortables.slice().sort((a: T, b: T) => a.numericValue() - b.numericValue());
    }

    highest(): T {
        return this.sortables.sort((a: T, b: T) => b.numericValue() - a.numericValue())[0];
    }


}
