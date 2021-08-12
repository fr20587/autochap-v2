/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Angular Modules
import { Routes } from '@angular/router';

// Component
import { AppComponent } from './app.component';

export const appRoutes: Routes = [

    // Redirect empty path to '/home'
    { path: '', pathMatch : 'full', redirectTo: 'home' },

    // Home routes
    {
        path: '',
        component  : AppComponent,
        data: {
            title: 'Inicio'
        },
        children   : [
            { path: 'home', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
        ]
    },

];
