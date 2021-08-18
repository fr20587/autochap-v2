// User type
import { IUser } from '../pages/profile/user.types';

/**
 * Auth response interface
 *
 * @interface
 */
export interface IAuthResponse {
    ok: boolean;
    message: string;
    token: string;
    user: IUser;
}
