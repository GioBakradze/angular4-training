import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-06-01',
    templateUrl: './demo-06-01.component.html',
    styleUrls: ['./demo-06-01.component.css']
})
export class Demo0601Component implements OnInit {

    constructor() {
    }

    ngOnInit() {
        // TODO: basic form example
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
    }

}
