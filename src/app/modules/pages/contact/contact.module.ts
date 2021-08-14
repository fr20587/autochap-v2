// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Component
import { ContactComponent } from './contact.component';

// Routes
import { contactRoutes } from './contact.routing';



@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(contactRoutes),
    ]
})
export class ContactModule {
}
