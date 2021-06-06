import {User} from '../types/models'
export interface LoggedUserDto {
    token: string;
    user: User;
}