import { useDailyDateState } from '../store/daily-date.store';
import { getCalendarData } from './getCalendarData';

export const setWeekDaysToStore = (checked: boolean, dayWeek: number) => {
  const deliveryDays = useDailyDateState.getState().deliveryDays;
  const setDeliveryDays = useDailyDateState.getState().setDeliveryDays;
  const { allDaysArray, currentDay } = getCalendarData();

  let arr: number[] = deliveryDays;

  allDaysArray.forEach(day => {
    const one = new Date().setDate(day);
    const two = new Date(one).getDay();

    if (day > currentDay) {
      if (dayWeek === two) {
        if (checked) {
          arr.push(new Date(one).getDate());
        } else {
          const res = arr.filter(day => day !== new Date(one).getDate());
          arr = res.sort((a, b) => a - b);
        }
      }
    }
  });
  setDeliveryDays(arr.sort((a, b) => a - b));
};
