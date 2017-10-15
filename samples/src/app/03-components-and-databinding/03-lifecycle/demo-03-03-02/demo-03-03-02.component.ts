import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-demo-03-03-02',
    templateUrl: './demo-03-03-02.component.html',
    styleUrls: ['./demo-03-03-02.component.css']
})
export class Demo030302Component {

    warningMessage: string;
    warnings: Array<string>;
    warningTitle: string;

    constructor() {
        this.warningMessage = 'warning';
        this.warnings = [];
        this.warningTitle = 'super warning';
    }

    addWarning(): void {
        // do nothing
        this.warnings.push(this.warningMessage);
        this.warningMessage = '';
    }

    removeWarning(): void {
        this.warnings.splice(0, 1);
    }


}
