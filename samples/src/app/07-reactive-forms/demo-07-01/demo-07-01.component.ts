import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-demo-07-01',
    templateUrl: './demo-07-01.component.html',
    styleUrls: ['./demo-07-01.component.css']
})
export class Demo0701Component implements OnInit {

    exampleForm: FormGroup;

    constructor() {
        this.exampleForm = new FormGroup({
            name: new FormControl(),
            password: new FormControl()
        });
    }

    onSubmit() {
        console.log(this.exampleForm.value);
    }

    ngOnInit() {
    }

}
