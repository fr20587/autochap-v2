/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Angular Modules
import { Route } from '@angular/router';

// Component
import { AuthComponent } from './auth.component';

export const authRoutes: Route[] = [
    {
        path: '',
        component: AuthComponent,
        children: [

            // Sign in
            { path: 'sign-in', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },

            // Sign up
            { path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) },

        ]
    }
];
