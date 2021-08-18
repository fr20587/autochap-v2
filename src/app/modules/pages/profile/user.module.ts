// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { UserComponent } from './user.component';

// Routes
import { userRoutes } from './user.routing';


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
    ]
})
export class UserModule {
}
