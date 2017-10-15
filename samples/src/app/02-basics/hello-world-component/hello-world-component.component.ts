import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world-component',
    templateUrl: './hello-world-component.component.html',
    styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponentComponent {

    helloText: string;
    buttonIsDisabled: boolean;
    secondButtonClasses: any;
    clickMeStyles: any;

    constructor() {
        this.helloText = 'Hello, Angular is awesome';
        this.buttonIsDisabled = true;
        this.secondButtonClasses = {
            'btn-lg': false,
            'btn-primary': true,
            'btn-warning': false
        };

        // window.setTimeout(() => {
        //     this.helloText = 'Changed text later';
        //     this.buttonIsDisabled = false;
        //     this.secondButtonClasses = {
        //         'btn-lg': true,
        //         'btn-primary': false,
        //         'btn-warning': true
        //     };
        //     this.clickMeStyles = {
        //         'color': 'red'
        //     };
        // }, 5000);
    }


    doNotClick() {
        alert('it was clicked');
    }

}
