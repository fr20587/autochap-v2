// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third's Modules
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Component
import { SignInComponent } from './sign-in.component';

// Routes
import { signInRoutes } from './sign-in.routing';



@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(signInRoutes),
        SweetAlert2Module,
    ]
})
export class SignInModule { }
