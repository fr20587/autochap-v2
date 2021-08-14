// Angular Modules
import { Component, OnInit } from '@angular/core';

// JQuery
declare let jQuery: any;


@Component({
    selector: 'ath-header',
    templateUrl: './header.component.html',
    styles: [
    ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        jQuery(window).on('scroll', () => {
            const scroll = jQuery(window).scrollTop();
            if (scroll <= 200) {
                jQuery('.header-main').removeClass('sticky');
            } else {
                jQuery('.header-main').addClass('sticky');
            }
        });
    }
}
