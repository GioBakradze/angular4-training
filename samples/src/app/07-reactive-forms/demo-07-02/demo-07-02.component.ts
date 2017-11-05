import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-demo-07-02',
    templateUrl: './demo-07-02.component.html',
    styleUrls: ['./demo-07-02.component.css']
})
export class Demo0702Component implements OnInit {

    exampleForm: FormGroup;

    constructor() {
        this.exampleForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.exampleForm.value);
    }

}
