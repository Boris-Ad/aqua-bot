import { IResponseOrder } from "../types/api.types";

export const getArrayDeliveryDays = (orders:IResponseOrder[]) => {
    const daysMonthString: Record<string, number> = {};

    orders.forEach(order => {
      const days = order.dailyData.split(' ');
      days.forEach(day => {
        daysMonthString[day] ? (daysMonthString[day] += 1) : (daysMonthString[day] = 1);
      });
    });
  
    const arr = Object.keys(daysMonthString);
    const deliveryDays = arr.map(item => ({ day:item, delivery: daysMonthString[item]}));
    return deliveryDays
}