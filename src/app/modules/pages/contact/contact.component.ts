// Angular Modules
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

/**
 * Contact Component
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

    /**
     * Consturctor
     *
     * @constructor
     */
    constructor(
        private _fb: FormBuilder,
    ) { }

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
