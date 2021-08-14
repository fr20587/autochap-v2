// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Gallery Component
 */
@Component({
    selector: 'ath-gallery',
    templateUrl: './gallery.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
    public servicesPhotos = [
        { title: 'Revision de frenos', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-1.jpg' },
        { title: 'Electrónica', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-2.jpg' },
        { title: 'Tramado', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-3.jpg' },
        { title: 'Tapiceria', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-4.jpg' },
        { title: 'Cambio de ruedas', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-5.jpg' },
        { title: 'Cambio de aciete', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-6.jpg' },
        { title: 'Fregado', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-7.jpg' },
        { title: 'Chapistería', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-8.jpg' },
        { title: 'Rectificación', description: 'Lorem ipsum dolor sit amet', image: 'assets/images/gallery/gallery-9.jpg' },
    ];

    /**
     * Consturctor
     *
     * @constructor
     */
    constructor() { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    public trackByFn(index: number, item: any): any {
        return item.id || index;
    }

}
