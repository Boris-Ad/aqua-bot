import { IResponseOrder } from '../types/api.types';

export const getOrdersDeliveryToday = (orders: IResponseOrder[]) => {
  const today = new Date().getDate();
  return orders.filter(order => new Date(order.createdAt).getDate() === today && !order.daily && !order.completed);
};
