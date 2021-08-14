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
            { path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
        ]
    },

    // Page not found
    { path: '404', loadChildren: () => import('./modules/pages/error/error.module').then(m => m.ErrorModule) },

    // Redirect page not found path to '/404'
    { path: '**', redirectTo: '404' }
];
