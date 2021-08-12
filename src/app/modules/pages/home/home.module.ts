// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './home.component';

// Routes
import { homeRoutes } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(homeRoutes),
    ]
})
export class HomeModule
{
}
