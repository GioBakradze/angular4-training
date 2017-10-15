import { Component, OnInit } from '@angular/core';
import { ColoredName } from '../colored-name';

@Component({
    selector: 'app-directives-demo',
    templateUrl: './directives-demo.component.html',
    styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent {

    isDangerousMessageVisible = false;
    ifElseMessage: false;
    itemsList: Array<string>;
    coloredNames: Array<ColoredName>;

    constructor() {
        this.itemsList = ['gio', 'elene', 'nika', 'ana', 'tako'];
        this.coloredNames = [
            new ColoredName('gio', true),
            new ColoredName('elene', false),
            new ColoredName('nika', false),
            new ColoredName('ana', false),
            new ColoredName('tako', true)
        ];
    }


}
