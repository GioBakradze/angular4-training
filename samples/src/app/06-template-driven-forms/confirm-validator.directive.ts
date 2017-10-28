import { Directive, forwardRef, Input, OnChanges } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validators } from '@angular/forms';

function confirmValidator(match: string) {
    return function (c: FormControl) {
        const val = c.value;

        if (!val && !match) {
            return null;
        }

        console.log(match, val, val !== match);
        if (val !== match) {
            return {
                confirm: `${match} and ${val} should match`
            };
        }
        return null;
    };
}

@Directive({
    selector: '[confirm][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => ConfirmValidatorDirective),
            multi: true
        }
    ]
})
export class ConfirmValidatorDirective implements OnChanges {

    private validatorFunction = Validators.nullValidator;

    // @Input('confirm') set confirm(value: string) {
    //     this.validatorFunction = confirmValidator(value);
    // }

    @Input('confirm') confirm: string;

    ngOnChanges() {
        this.validatorFunction = confirmValidator(this.confirm);
    }

    constructor() {
    }

    validate(c: FormControl) {
        return this.validatorFunction(c);
    }

}
