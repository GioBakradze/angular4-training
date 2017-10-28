import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function length3Validator(c: FormControl) {
    const val = c.value;

    if (!val || val.length !== 3) {
        return {
            length3: val
        };
    }

    return null;
}


@Directive({
    selector: '[length3][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: length3Validator,
            multi: true
        }
    ]
})
export class Length3ValidatorDirective {

    constructor() {
    }

}
