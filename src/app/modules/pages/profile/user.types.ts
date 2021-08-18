/**
 * User
 *
 * @interface
 */
export interface IUser
{
    id: string;
    name: string;
    email: string;
    status?: string;
}

/**
 * Service
 *
 * @interface
 */
export interface IService
{
    id: string;
    date: string;
    car: string;
    carId: string;
    name: string;
    mechanic: string;
    status: string;
    price: number;
}
