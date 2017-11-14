import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LazySubpageComponent } from './lazy-subpage/lazy-subpage.component';

const routes: Routes = [
    {path: '', component: LazyPageComponent},
    {path: 'lazy-subpage', component: LazySubpageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LazyPageComponent, LazySubpageComponent]
})
export class LazyPageModule {
}
