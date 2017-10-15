import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-person-badge',
    templateUrl: './person-badge.component.html',
    styleUrls: ['./person-badge.component.css']
})
export class PersonBadgeComponent implements OnInit {

    @Input() name: string;
    @Input('age') personAge: number;

    @Output() gotRich: EventEmitter<string>;

    constructor() {
        this.gotRich = new EventEmitter<string>();
    }

    ngOnInit() {
    }

    getRich(): void {
        this.gotRich.emit(this.name);
    }

}
