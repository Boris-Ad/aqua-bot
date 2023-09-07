import React from 'react';
import clsx from 'clsx';
import { getCalendarData } from '../../utils/getCalendarData';
import { useDailyDateState } from '../../store/daily-date.store';

const Month: React.FC = () => {
  const { allDaysArray, colStart, currentDay } = getCalendarData();
  const [deliveryDays, setDeliveryDays] = useDailyDateState(state => [state.deliveryDays, state.setDeliveryDays]);

  const weekly = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const onClickDay = (day: number) => {
    if (day > currentDay) {
      if (deliveryDays.includes(day)) {
        setDeliveryDays(deliveryDays.filter(item => item !== day));
      } else {
        setDeliveryDays([...deliveryDays, day].sort((a, b) => a - b));
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <ul className="grid grid-cols-7 justify-items-center font-medium">
        {weekly.map(day => (
          <li key={day} className={clsx(day === 'Сб' && 'text-orange-500', day === 'Вс' && 'text-orange-500')}>
            {day}
          </li>
        ))}
      </ul>
      <div className="flex-1">
        <ul className="grid grid-cols-7 justify-items-center">
          {allDaysArray.map(day => (
            <li
              key={day}
              onClick={() => onClickDay(day)}
              className={clsx(
                'px-2 rounded-md',
                day === 1 && colStart,
                currentDay === day && 'text-orange-400',
                currentDay > day && 'text-gray-300',
                deliveryDays.includes(day) && 'ring-2 ring-orange-400 ring-inset'
              )}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={() => setDeliveryDays([])}
          className="px-2 py-1 bg-sky-500 text-sm text-gray-100 rounded-md
           active:ring-2 active:ring-sky-400 active:ring-offset-2 transition"
        >
          Очистить
        </button>
      </div>
    </div>
  );
};

export default Month;
