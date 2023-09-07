import { IButtonGroup } from '../../types/types';
import Week from './Week';
import Month from './Month';
import React from 'react';
import ButtonGroup from '../ui/ButtonGroup';
import { useDailyDateState } from '../../store/daily-date.store';

const buttonGroup: IButtonGroup[] = [
  { title: 'Дни недели', name: 'week' },
  { title: 'Месяц', name: 'month' },
];

const DateSelection: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState('week');
  const setDeliveryDays = useDailyDateState(state => state.setDeliveryDays);
  const setDailyWeek = useDailyDateState(state => state.setDailyWeek);

  const handleSetActiveButton = (name: string) => {
    setActiveButton(name);
    setDeliveryDays([]);
    setDailyWeek(activeButton === 'week' ? false : true);
  };

  return (
    <div className="p-2">
      <ButtonGroup activeButton={activeButton} buttonGroup={buttonGroup} setActiveButton={handleSetActiveButton} />

      <div className="h-[230px]">
        {activeButton === 'week' && <Week />}
        {activeButton === 'month' && <Month />}
      </div>
    </div>
  );
};

export default DateSelection;
