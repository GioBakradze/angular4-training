import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ProfileComponent } from './routes/profile/profile.component';
import { NewsComponent } from './routes/news/news.component';
import { PersonComponent } from './routes/person/person.component';
import { PersonInfoComponent } from './routes/person-info/person-info.component';
import { PersonFormComponent } from './routes/person-form/person-form.component';
import { SecretRouteComponent } from './secret-route/secret-route.component';
import { SecretGuardService } from './secret-guard.service';
import { TrapRouteComponent } from './trap-route/trap-route.component';
import { FormsModule } from '@angular/forms';
import { TrapGuardService } from './trap-guard.service';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'news/:id', component: NewsComponent},
    {
        path: 'person', component: PersonComponent,
        children: [
            {path: 'info', component: PersonInfoComponent},
            {path: 'form', component: PersonFormComponent}
        ]
    },
    {
        path: 'secret-route/:secret',
        component: SecretRouteComponent, 
        canActivate: [SecretGuardService]
    },
    {
        path: 'trap-route',
        component: TrapRouteComponent,
        canDeactivate: [TrapGuardService]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        NewsComponent,
        PersonComponent,
        PersonInfoComponent,
        PersonFormComponent,
        SecretRouteComponent,
        TrapRouteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        SecretGuardService,
        TrapGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
