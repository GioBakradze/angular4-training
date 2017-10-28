import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-06-05',
    templateUrl: './demo-06-05.component.html',
    styleUrls: ['./demo-06-05.component.css']
})
export class Demo0605Component implements OnInit {

    @ViewChild('form') simpleForm: NgForm;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.simpleForm.value);
    }

    setAge() {
        this.simpleForm.form.patchValue({
            age: Math.floor(Math.random() * 40) + 20
        });
    }

    reset() {
        this.simpleForm.reset();
    }

}
