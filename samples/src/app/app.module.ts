import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponentComponent } from './02-basics/hello-world-component/hello-world-component.component';
import { SimpleComponent2Component } from './02-basics/simple-component-2/simple-component-2.component';
import { DirectivesDemoComponent } from './02-basics/directives-demo/directives-demo.component';
import { Demo0301Component } from './03-components-and-databinding/01-custom-properties-and-events/demo-03-01/demo-03-01.component';
import { PersonBadgeComponent } from './03-components-and-databinding/01-custom-properties-and-events/person-badge/person-badge.component';
import { Demo0302Component } from './03-components-and-databinding/02-accessing-dom/demo-03-02/demo-03-02.component';
import { Demo0303Component } from './03-components-and-databinding/03-lifecycle/demo-03-03/demo-03-03.component';
import { PanelComponent } from './03-components-and-databinding/03-lifecycle/panel/panel.component';
import { Demo030302Component } from './03-components-and-databinding/03-lifecycle/demo-03-03-02/demo-03-03-02.component';
import { WarningPanelComponent } from './03-components-and-databinding/03-lifecycle/warning-panel/warning-panel.component';
import { Demo0401Component } from './04-services/01-shared-logic/demo-04-01/demo-04-01.component';
import { Min1Component } from './04-services/01-shared-logic/min-1/min-1.component';
import { Min2Component } from './04-services/01-shared-logic/min-2/min-2.component';
import { Demo0101Component } from './01-typescript-basics/demo-01-01/demo-01-01.component';
import { Demo0102Component } from './01-typescript-basics/demo-01-02/demo-01-02.component';
import { Demo0103Component } from './01-typescript-basics/demo-01-03/demo-01-03.component';
import { Demo0402Component } from './04-services/02-shared-state/demo-04-02/demo-04-02.component';
import { PhonesListComponent } from './04-services/02-shared-state/phones-list/phones-list.component';
import { PhonesFormComponent } from './04-services/02-shared-state/phones-form/phones-form.component';
import { PhonesCountComponent } from './04-services/02-shared-state/phones-count/phones-count.component';
import { RedBackgroundDirective } from './05-directives/red-background.directive';
import { Demo0501Component } from './05-directives/demo-05-01/demo-05-01.component';
import { BetterRedBackgroundDirective } from './05-directives/better-red-background.directive';
import { EventBackgroundDirective } from './05-directives/event-background.directive';
import { BindingEventBackgroundDirective } from './05-directives/binding-event-background.directive';
import { HighlighDirective } from './05-directives/highligh.directive';
import { Demo0502Component } from './05-directives/demo-05-02/demo-05-02.component';
import { UnlessDirective } from './05-directives/unless.directive';
import { Demo0503Component } from './05-directives/demo-05-03/demo-05-03.component';
import { Demo0601Component } from './06-template-driven-forms/demo-06-01/demo-06-01.component';
import { Demo0602Component } from './06-template-driven-forms/demo-06-02/demo-06-02.component';
import { Demo0603Component } from './06-template-driven-forms/demo-06-03/demo-06-03.component';
import { Demo0604Component } from './06-template-driven-forms/demo-06-04/demo-06-04.component';
import { Length3ValidatorDirective } from './06-template-driven-forms/length-3-validator.directive';
import { ConfirmValidatorDirective } from './06-template-driven-forms/confirm-validator.directive';
import { Demo0605Component } from './06-template-driven-forms/demo-06-05/demo-06-05.component';
import { Demo0701Component } from './07-reactive-forms/demo-07-01/demo-07-01.component';
import { Demo0702Component } from './07-reactive-forms/demo-07-02/demo-07-02.component';
import { Demo0703Component } from './07-reactive-forms/demo-07-03/demo-07-03.component';
import { Demo0801Component } from './08-http/demo-08-01/demo-08-01.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicInterceptorService } from './08-http/basic-interceptor.service';
import { Demo0901Component } from './09-observables/demo-09-01/demo-09-01.component';
import { Demo0902Component } from './09-observables/demo-09-02/demo-09-02.component';
import { Demo1001Component } from './10-pipes/demo-10-01/demo-10-01.component';
import { ShortenPipe } from './10-pipes/shorten.pipe';
import { ShortenArgsPipe } from './10-pipes/shorten-args.pipe';
import { Demo1002Component } from './10-pipes/demo-10-02/demo-10-02.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloWorldComponentComponent,
        SimpleComponent2Component,
        DirectivesDemoComponent,
        Demo0301Component,
        PersonBadgeComponent,
        Demo0302Component,
        Demo0303Component,
        PanelComponent,
        Demo030302Component,
        WarningPanelComponent,
        Demo0401Component,
        Min1Component,
        Min2Component,
        Demo0101Component,
        Demo0102Component,
        Demo0103Component,
        Demo0402Component,
        PhonesListComponent,
        PhonesFormComponent,
        PhonesCountComponent,
        RedBackgroundDirective,
        Demo0501Component,
        BetterRedBackgroundDirective,
        EventBackgroundDirective,
        BindingEventBackgroundDirective,
        HighlighDirective,
        Demo0502Component,
        UnlessDirective,
        Demo0503Component,
        Demo0601Component,
        Demo0602Component,
        Demo0603Component,
        Demo0604Component,
        Length3ValidatorDirective,
        ConfirmValidatorDirective,
        Demo0605Component,
        Demo0701Component,
        Demo0702Component,
        Demo0703Component,
        Demo0801Component,
        Demo0901Component,
        Demo0902Component,
        Demo1001Component,
        ShortenPipe,
        ShortenArgsPipe,
        Demo1002Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BasicInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
