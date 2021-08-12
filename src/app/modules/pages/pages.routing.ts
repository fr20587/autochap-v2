/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Angular Modules
import { Route } from '@angular/router';

// Component
import { PagesComponent } from './pages.component';

export const pagesRoutes: Route[] = [
    {
        path     : '',
        component: PagesComponent,
        children   : [
            { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        ]
    }
];
