// Angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Third's Modules
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 0,
            keyboard: true,
            navigation: false,
            pagination: {
                el: '.testimonial-active .swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            speed: 600,
            effect: 'slide'
};

// Component
import { HomeComponent } from './home.component';

// Routes
import { homeRoutes } from './home.routing';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        SwiperModule,
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ]
})
export class HomeModule {
}
