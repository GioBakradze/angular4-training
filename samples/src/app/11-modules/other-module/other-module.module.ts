import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherPanelComponent } from './other-panel/other-panel.component';
import { OtherPrivateComponentComponent } from './other-private-component/other-private-component.component';
import { OtherDirectiveDirective } from './other-directive.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        OtherPanelComponent,
        OtherDirectiveDirective
    ],
    declarations: [OtherPanelComponent, OtherPrivateComponentComponent, OtherDirectiveDirective]
})
export class OtherModuleModule {
}
