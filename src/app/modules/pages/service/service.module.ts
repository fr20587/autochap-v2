// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { ServiceComponent } from './service.component';

// Routes
import { serviceRoutes } from './service.routing';



@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoutes),
  ]
})
export class ServiceModule { }
