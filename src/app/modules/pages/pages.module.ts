// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { JsonpModule } from '@angular/http';

// Modules
import { LayoutsModule } from 'src/app/layouts/layouts.module';

// Components
import { PagesComponent } from './pages.component';

// Routes
import { pagesRoutes } from './pages.routing';


@NgModule({
    declarations: [
        PagesComponent
    ],
    imports: [
        RouterModule.forChild(pagesRoutes),


        // JsonpModule,
        // Modules
        LayoutsModule,
    ]
})
export class PagesModule {
}
