import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck,
    ElementRef, Input,
    OnChanges,
    OnDestroy,
    OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
    selector: 'app-warning-panel',
    templateUrl: './warning-panel.component.html',
    styleUrls: ['./warning-panel.component.css']
})
export class WarningPanelComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() title: string;
    @ViewChild('heading') heading: ElementRef;
    @ContentChild('parentP') parentP: ElementRef;

    constructor() {
        console.log('constructor called');
    }

    // called after bound input property changes
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called', changes);
    }

    // ONCE. called once the component is initialized, after constructor
    ngOnInit() {
        console.log('ngOnInit called', this.title);
        console.log(this.heading.nativeElement.textContent);
        console.log(this.parentP.nativeElement.textContent);
    }

    // called during every change detection run
    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    // ONCE. called after ng-content has been projected
    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
    }

    // called after projected content has been checked
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called');
    }

    // ONCE. called after components view has been initialized and child views
    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log(this.heading.nativeElement.textContent);
        console.log(this.parentP.nativeElement.textContent);
    }

    // called after view checked
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }

    // called when component is about to be destroyed
    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }

}
