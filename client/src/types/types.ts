import { IProductBottles } from './api.types';

export interface IForErrorPage extends Error {
  statusText?: string;
}

export type InformingTypes = 'danger' | 'warning' | 'access';

export interface IButtonGroup {
  title: string;
  name: string;
}

export interface IUser {
  telegId: number;
  avatar?: string;
  name?: string;
  address?: string;
}

export interface IProduct {
  id: number;
  price: number;
  src: string;
  categoryName: string;
  bottleSize: number;
}

export interface IOrder {
  userTelegId: number;
  categoryName: string;
  bottle5: number;
  bottle10: number;
  bottle20: number;
  price: number;
  address: string;
  daily: boolean;
  dailyData:string
  dailyWeek:boolean
  saleName?:string;
}

export interface ITodayOrder extends IProductBottles {
  amount: number;
}

export interface IOptions {
  value:string
  title:string
}
