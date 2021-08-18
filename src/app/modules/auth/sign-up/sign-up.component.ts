// Angular Modules
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Third's Modules
import Swal from 'sweetalert2';

// Service
import { AuthService } from '../auth.service';


@Component({
    selector: 'ath-sign-up',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent implements OnInit {

    @ViewChild('signUpNgForm') signUpNgForm!: NgForm;

    public signUpForm!: FormGroup;

    /**
     * Constructor
     *
     * @constructor
     */
    constructor(
        private _authService: AuthService,
        private _fb: FormBuilder,
        private _router: Router,
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.signUpForm = this._fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password1: ['', [Validators.required]],
            password2: ['', [Validators.required]],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    public signUp(): void {
        // Do nothing if the form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Sign up
        this._authService.signUp(this.signUpForm.value)
            .subscribe(
                () => {

                    // Navigate to home page
                    this._router.navigateByUrl('/home');
                },
                () => {

                    // Re-enable the form
                    this.signUpForm.enable();

                    // Reset the form
                    this.signUpNgForm.resetForm();

                    Swal.fire('Éxito', 'Ha iniciado sesión correctamente', 'success');
                }
                // , (err) => {

                //     // Show error message in console
                //     console.error(err);

                //     //Throw error alert
                //     Swal.fire('Error', err.error.message, 'error');
                // }
            );
    }
}
