import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-demo-08-01',
    templateUrl: './demo-08-01.component.html',
    styleUrls: ['./demo-08-01.component.css']
})
export class Demo0801Component implements OnInit {

    usersList: any[];

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.httpClient
            .get('http://localhost:3000/users')
            .subscribe((data: any[]) => {
                this.usersList = data;
            });
    }

    add(data: any) {
        this.httpClient
            .post('http://localhost:3000/users', data)
            .subscribe(() => {
                this.fetchData();
            });
    }

    addUser(form: NgForm) {
        this.add(form.value);
        form.reset();
    }

}
