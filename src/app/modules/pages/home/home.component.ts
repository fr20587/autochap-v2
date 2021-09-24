/* eslint-disable max-len */
// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

// Third's Modules
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { OwlOptions } from 'ngx-owl-carousel-o';

/**
 * Home Component
 */
@Component({
    selector: 'ath-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

    public config: SwiperConfigInterface = {};
    public slides = [
        { name: 'Crystopher Lopez', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam saepe expedita impedit! Consequuntur, nobis nemo!', image: 'assets/images/author/author-01.jpg' },
        { name: 'Mario Casas', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam saepe expedita impedit! Consequuntur, nobis nemo!', image: 'assets/images/author/author-02.jpg' },
        { name: 'Ana Belen', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam saepe expedita impedit! Consequuntur, nobis nemo!', image: 'assets/images/author/author-03.jpg' },
    ];
    public logos = [
        { image: 'assets/images/autochap/logos/cubataxi-logo.png' },
        { image: 'assets/images/autochap/logos/cubatel-logo.webp' },
        { image: 'assets/images/autochap/logos/micons-logo.png' },
        { image: 'assets/images/autochap/logos/mcv-logo.png' },
        { image: 'assets/images/autochap/logos/minint-logo.png' },
        { image: 'assets/images/autochap/logos/minsap-logo.jpg' },
        { image: 'assets/images/autochap/logos/rex-logo.svg' },
        { image: 'assets/images/autochap/logos/taxis-cuba-logo.png' },
        { image: 'assets/images/autochap/logos/transtur-logo.svg' },
    ];

    public customOptions: OwlOptions = {
        loop: true,
        autoplaySpeed: 3000,
        navSpeed: 3000,
        /* paginationSpeed: 3000, */
        /* slideSpeed: 3000, */
        smartSpeed: 3000,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            991: {
                items: 4
            },
            1000: {
                items: 5
            }
        },
    };

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
