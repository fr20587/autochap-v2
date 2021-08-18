// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// Service
import { AuthService } from '../../auth/auth.service';

// Types
import { IService } from './user.types';

/**
 * User Component
 */
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
    public services: IService[] = [
        {
            id: 'asadasdasd4654564as',
            date: '18/08/2021',
            car: 'Lada 2107',
            carId: 'B 265956',
            name: 'Chapisteria',
            mechanic: 'Alberto Lopez',
            status: 'Pendiente',
            price: 15200,
        },
        {
            id: 'asadasdasd4654564as',
            date: '18/08/2021',
            car: 'Lada 2107',
            carId: 'B 265956',
            name: 'Pintura',
            mechanic: 'Alberto Lopez',
            status: 'Pendiente',
            price: 1200,
        },
    ];

    /**
     * Consturctor
     *
     * @constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router,
    ) { }

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

    public signOut(): void {
        // TODO: Active this method
        // this._authService.signOut();

        this._router.navigateByUrl('/home');
    }

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
