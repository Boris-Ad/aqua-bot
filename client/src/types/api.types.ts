import { IOrder, IUser } from './types';

export interface IProductCategory {
  name: string;
  title: string;
  src: string;
}

export interface IProductBottles {
  size: number;
  src: string;
}

export interface IResponseUser extends IUser {
 createdAt: Date;
}

export interface IResponseOrder extends IOrder {
  id: number;
  createdAt: string;
  deletedAt: string;
  deleted: boolean;
  completed: boolean;
}
