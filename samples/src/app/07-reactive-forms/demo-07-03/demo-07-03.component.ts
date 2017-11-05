import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-demo-07-03',
    templateUrl: './demo-07-03.component.html',
    styleUrls: ['./demo-07-03.component.css']
})
export class Demo0703Component implements OnDestroy {

    exampleForm: FormGroup;
    formChangeSubscription: Subscription;

    constructor() {
        this.exampleForm = new FormGroup({
            name: new FormControl(),
            password: new FormControl()
        });

        this.formChangeSubscription = this.exampleForm.valueChanges.subscribe(val => {
            console.log(val);
        });
    }

    onSubmit() {
        console.log(this.exampleForm.value);
    }

    ngOnDestroy() {
        this.formChangeSubscription.unsubscribe();
    }

}
