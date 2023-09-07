import { IProductBottles, IResponseOrder } from '../types/api.types';
import { ITodayOrder } from '../types/types';

export const filterTodayOrder = (todayOrder: IResponseOrder, bottles: IProductBottles[] | undefined): ITodayOrder[] => {
  const newArr: ITodayOrder[] = [];

  bottles?.forEach(bottle => {
    const key = 'bottle' + bottle.size;
    const value = todayOrder[key as keyof typeof todayOrder];
    if (typeof value === 'number' && Boolean(value)) {
      newArr.push({ ...bottle, amount: value });
    }
  });

  return newArr;
};
