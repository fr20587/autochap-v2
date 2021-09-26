// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



/**
 * Contact Component
 *
 * @export
 * @class ContactComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'ath-contact',
    templateUrl: './contact.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

    @ViewChild('contactNgForm') public contactNgForm!: NgForm;

    public contactForm!: FormGroup;
    public mapOptions: google.maps.MapOptions = {
        center: { lat: 23.112161, lng: -82.418462 },
        zoom: 13.5,
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    };
    public marker = {
        position: { lat: 23.112161, lng: -82.418462 },
    };

    /**
     * Consturctor
     *
     * @constructor
     */
    constructor(
        private _fb: FormBuilder,
    ) {

    }


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {


        this.contactForm = this._fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            message: ['', [Validators.required]],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Publics methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sends message
     *
     * @method
     */
    public sendMessage(): void {
        console.log(this.contactForm.value);

        // Re-enable the form
        this.contactForm.enable();

        // Reset the form
        this.contactNgForm.resetForm();
    }
}
