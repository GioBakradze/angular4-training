import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-06-04',
    templateUrl: './demo-06-04.component.html',
    styleUrls: ['./demo-06-04.component.css']
})
export class Demo0604Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }

}
