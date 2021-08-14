// Angular Modules
import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Footer Component
 */
@Component({
  selector: 'ath-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent
{

 public year: number = new Date().getFullYear();

}
