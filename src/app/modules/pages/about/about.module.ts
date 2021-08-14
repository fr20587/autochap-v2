// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { AboutComponent } from './about.component';

// Routes
import { aboutRoutes } from './contact.routing';



@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(aboutRoutes),
    ]
})
export class AboutModule {

}
