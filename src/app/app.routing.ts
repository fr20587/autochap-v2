/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Angular Modules
import { Routes } from '@angular/router';

// Component
import { AppComponent } from './app.component';

export const appRoutes: Routes = [

    // Redirect empty path to '/home'
    { path: '', pathMatch : 'full', redirectTo: 'home' },

    // Redirect signed in user to the '/home'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    // {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'home'},

    // Home routes
    {
        path: '',
        component  : AppComponent,
        data: {
            title: 'Inicio'
        },
        children   : [
            // Pages routes
            { path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },

            // Auth routes
            { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
        ]
    },

    // Page not found
    { path: '404', loadChildren: () => import('./modules/pages/error/error.module').then(m => m.ErrorModule) },

    // Redirect page not found path to '/404'
    { path: '**', redirectTo: '404' }
];
