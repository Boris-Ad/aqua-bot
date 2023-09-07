import { IProductCategory, IResponseOrder } from '../types/api.types';

export const createTitleForTodayOrder = (
  categories: IProductCategory[] | undefined,
  todayOrder: IResponseOrder | string
): string => {
  let title: string = '';
  categories?.forEach(category => {
    if (typeof todayOrder === 'string') {
      if (todayOrder === category.name) {
        title = category.title;
      }
    } else {
      if (todayOrder.categoryName === category.name) {
        title = category.title;
      }
    }
  });
  return title;
};
