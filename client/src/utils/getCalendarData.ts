export const getCalendarData = () => {
  const allDaysArray = [];
  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const date = new Date(currentYear, currentMonth + 1, 0);
  const allDays = date.getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const currentDay = new Date().getDate();
  const localeMonth = month[currentMonth]

  for (let i = 1; i <= allDays; i++) {
    allDaysArray.push(i);
  }

  const colStart = ['col-start-1', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'][
    firstDay - 1
  ];

  return { allDaysArray, colStart, currentDay, localeMonth };
};
