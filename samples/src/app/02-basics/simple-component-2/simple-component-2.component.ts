import { Component } from '@angular/core';

@Component({
    selector: 'app-simple-component-2',
    templateUrl: './simple-component-2.component.html',
    styleUrls: ['./simple-component-2.component.css']
})
export class SimpleComponent2Component {

    input1Text: string;
    input2Text: string;

    constructor() {
    }

    inputDataChanged(event: Event): void {
        const element: HTMLInputElement = <HTMLInputElement>event.target;
        console.log(element.value);
        this.input1Text = element.value;
    }

    changeInput2Text(): void {
        this.input2Text = 'input 2 text was changed from ts';
    }

}
