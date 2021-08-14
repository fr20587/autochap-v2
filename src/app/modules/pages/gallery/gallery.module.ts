// Angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component
import { GalleryComponent } from './gallery.component';

// Routes
import { galleryRoutes } from './gallery.routing';



@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(galleryRoutes),
    ]
})
export class GalleryModule {
}
