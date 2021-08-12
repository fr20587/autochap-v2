// Angular Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
      RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutsModule { }
