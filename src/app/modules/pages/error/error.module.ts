// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { ErrorComponent } from './error.component';

// Routes
import { errorRoutes } from './error.routing';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild(errorRoutes),
  ]
})
export class ErrorModule { }
