// Angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Third's Modules
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Component
import { SignUpComponent } from './sign-up.component';

// Routes
import { signUpRoutes } from './sign-up.routing';



@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(signUpRoutes),
        SweetAlert2Module,
    ]
})
export class SignUpModule { }
