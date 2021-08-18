// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Third's Modules
import { Observable, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Type
import { IUser } from './user.types';

// Variables
import { environment } from 'src/environments/environment';

// API Url
const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user: ReplaySubject<IUser> = new ReplaySubject<IUser>(1);

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: IUser) {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<IUser> {
        return this._user.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    public get(): Observable<IUser> {
        return this._httpClient.get<IUser>(`${ API_URL }/user`).pipe(
            tap((user) => {
                this._user.next(user);
            })
        );
    }

    /**
     * Update the user
     *
     * @param user
     */
    public update(user: IUser): Observable<any> {
        return this._httpClient.patch<IUser>(`${ API_URL }/user`, user).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
