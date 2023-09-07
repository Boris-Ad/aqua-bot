
import { IResponseUser } from '../types/api.types';
import { IUser } from '../types/types';
import { adminApi, api } from './config.api';

export const getUser = () : Promise<IResponseUser> => {
    return api.get('user').json()
}

export const getUsers = () : Promise<IResponseUser[]> => {
    return adminApi.get('user/users').json()
}

export const createUser = (data:IUser) : Promise<IResponseUser> => {
    return api.post('user',{json:{...data}}).json()
}

export const updateUser = (data:IUser) : Promise<IResponseUser> => {
    return api.put('user',{json:{...data}}).json()
}