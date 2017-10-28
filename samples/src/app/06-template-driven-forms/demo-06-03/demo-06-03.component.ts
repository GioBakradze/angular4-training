import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-06-03',
    templateUrl: './demo-06-03.component.html',
    styleUrls: ['./demo-06-03.component.css']
})
export class Demo0603Component implements OnInit {

    @ViewChild('form') simpleForm: NgForm;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.simpleForm);
    }

}
