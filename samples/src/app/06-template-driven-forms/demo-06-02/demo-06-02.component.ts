import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-06-02',
    templateUrl: './demo-06-02.component.html',
    styleUrls: ['./demo-06-02.component.css']
})
export class Demo0602Component implements OnInit {

    @ViewChild('form') simpleForm: NgForm;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.simpleForm.value);
    }

}
