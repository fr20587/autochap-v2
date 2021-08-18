// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { LayoutsModule } from 'src/app/layouts/layouts.module';

// Components
import { AuthComponent } from './auth.component';

// Routes
import { authRoutes } from './auth.routing';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    LayoutsModule,
    RouterModule.forChild(authRoutes),
  ]
})
export class AuthModule {
}
