// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * About Component
 */
@Component({
    selector: 'ath-about',
    templateUrl: './about.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
    public mechanics = [
        { name: 'Abel López', speciality: 'Mecánico de motor', experience: '8 años', rating: '5', image: 'assets/images/team/team-1.jpg' },
        { name: 'Pedro Peña', speciality: 'Chapista', experience: '18 años', rating: '4.7', image: 'assets/images/team/team-2.jpg' },
        { name: 'Alain Daniel', speciality: 'Sistema de frenos', experience: '15 años', rating: '4.9', image: 'assets/images/team/team-3.jpg' },
        { name: 'Armando Manzanero', speciality: 'Refrigeración', experience: '13 años', rating: '4.2', image: 'assets/images/team/team-4.jpg' },
        { name: 'Lioni Torres', speciality: 'Mecánico de motor', experience: '7 años', rating: '4.8', image: 'assets/images/team/team-5.jpg' },
        { name: 'Adrian Galvez', speciality: 'Electrisista', experience: '16 años', rating: '4.4', image: 'assets/images/team/team-6.jpg' },
        { name: 'Maikel de Armas', speciality: 'Chapista', experience: '21 años', rating: '4.1', image: 'assets/images/team/team-7.jpg' },
        { name: 'Daniel García', speciality: 'Tapicero', experience: '12 años', rating: '5', image: 'assets/images/team/team-8.jpg' },
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
