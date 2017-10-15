import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    @Input() title: string;
    @Input() type: string;

    constructor() {
    }

    ngOnInit() {
    }

    typeClass(): any {
        const classes = {};
        const className = this.type ? `panel-${this.type}` : 'panel-default';
        classes[className] = true;
        return classes;
    }

}
