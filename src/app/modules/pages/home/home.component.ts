/* eslint-disable max-len */
// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

// Third's Modules
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


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
