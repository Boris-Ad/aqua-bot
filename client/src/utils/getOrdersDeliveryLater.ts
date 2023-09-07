import { IResponseOrder } from '../types/api.types';

export const getOrdersDeliveryLater = (orders: IResponseOrder[]) : IResponseOrder[]  => {
  return orders.filter(order => order.daily && !order.deleted);
};
