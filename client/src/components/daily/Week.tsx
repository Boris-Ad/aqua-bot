import clsx from 'clsx';
import React from 'react';
import { setWeekDaysToStore } from '../../utils/setWeekDaysToStore';

const days = [
  { id: 1, day: 'Понедельник', name: 'monday' },
  { id: 2, day: 'Вторник', name: 'tuesday' },
  { id: 3, day: 'Среда', name: 'wednesday' },
  { id: 4, day: 'Четверг', name: 'thursday' },
  { id: 5, day: 'Пятница', name: 'friday' },
  { id: 6, day: 'Суббота', name: 'saturday' },
  { id: 0, day: 'Воскресение', name: 'sunday' },
];

const Week: React.FC = () => {


  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, dayWeek: number) => {
    setWeekDaysToStore(e.target.checked,dayWeek)
  };

  return (
    <div className="my-2 space-y-2 w-1/2">
      {days.map(day => (
        <div key={day.id} className="flex justify-between gap-3 items-center">
          <p className={clsx(day.day === 'Суббота' && 'text-orange-500', day.day === 'Воскресение' && 'text-orange-500')}>
            {day.day}
          </p>
          <input
            type="checkbox"
            name={day.name}
            onChange={e => handleCheck(e, day.id)}
            className="form-checkbox rounded text-sky-500"
          />
        </div>
      ))}
    </div>
  );
};

export default Week;
