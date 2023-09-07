export const formatDaysMonthToDaysWeek = (days: number[]) => {
  const date = new Date();
  const abbrWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const arrWeek: string[] = [];
  const res1: Set<string> = new Set();
  const res2 = days.map(day => date.setDate(day));
  const res3 = res2.map(day => new Date(day).getDay()).sort((a, b) => a - b);
  res3.forEach(day => res1.add(abbrWeek[day]));
  res1.forEach(set => arrWeek.push(set));
  const weekDays = arrWeek.join(' ');
  return { weekDays };
};
