import { IoCalendarNumberOutline } from 'react-icons/io5';
import React from 'react';
import { formatDaysMonthToDaysWeek } from '../../utils/formatDaysMonthToDaysWeek';

interface DateDeliveryProps {
  dailyWeek: boolean;
  deliveryDays: number[];
}

const DateDelivery: React.FC<DateDeliveryProps> = ({ dailyWeek, deliveryDays }) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const monthDays = deliveryDays.join(' ');
  const { weekDays } = formatDaysMonthToDaysWeek(deliveryDays);

  return (
    <div className="border-t-[1px]  border-sky-400 mt-4 mb-2 pt-2">
      <div className="flex items-center gap-3">
        <IoCalendarNumberOutline />
        <p>
          Дата доставки:{' '}
          <span className="text-sm">
            {month}/{year}
          </span>
        </p>
      </div>

      {dailyWeek && (
        <p className="line-clamp-2">
          Каждую неделю: <span className="text-sm">{weekDays}</span>
        </p>
      )}
      {!dailyWeek && (
        <p className="line-clamp-2">
          Числа месяца: <span className="text-sm">{monthDays}</span>
        </p>
      )}
    </div>
  );
};

export default DateDelivery;
