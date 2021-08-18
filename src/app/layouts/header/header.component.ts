// Angular Modules
import { Component, OnInit } from '@angular/core';

// JQuery
declare let jQuery: any;

// Service
import { AuthService } from 'src/app/modules/auth/auth.service';



@Component({
    selector: 'ath-header',
    templateUrl: './header.component.html',
    styles: [
    ]
})
export class HeaderComponent implements OnInit {
    public isAuthenticated: boolean = false;

    constructor(
        private _authService: AuthService,
    ) { }

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
