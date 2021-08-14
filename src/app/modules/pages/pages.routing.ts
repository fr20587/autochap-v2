/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Angular Modules
import { Route } from '@angular/router';

// Component
import { PagesComponent } from './pages.component';

export const pagesRoutes: Route[] = [
    {
        path: '',
        component: PagesComponent,
        children: [

            // Home
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

            // Services
            { path: 'services', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },

            // Gallery
            { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },

            // About us
            { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

            // Contact
            { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },

            // Page not found
            { path: '404', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        ]
    }
];
