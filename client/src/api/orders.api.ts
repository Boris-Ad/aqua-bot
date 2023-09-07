import { api, adminApi } from './config.api';
import { IOrder } from '../types/types';
import { IResponseOrder } from '../types/api.types';

export const sendOrder = async (order: Omit<IOrder, 'id' | 'createdAt' | 'deletedAt'>): Promise<IResponseOrder> => {
  return await api.post('orders/create', { json: { ...order } }).json();
};

export const getCurrentOrders = async (): Promise<IResponseOrder[]> => {
  return await api.get('orders/current').json();
};

export const getUserCurrentOrdersForAdmin = async (id: number): Promise<IResponseOrder[]> => {
  return await api.get('orders/current-for-admin/' + id).json();
};

export const isCompleteOrder = async (id: number): Promise<IResponseOrder> => {
  return await api.put('orders/complete/' + id).json();
};

export const deleteOrder = async (id: number): Promise<IResponseOrder> => {
  return await api.put('orders/delete/' + id).json();
};

export const getOrders = async (): Promise<IResponseOrder[]> => {
  return await adminApi.get('orders').json();
};
