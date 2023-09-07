import clsx from 'clsx';

const slides = [
  { id: 1, text: 'Для владельцев абонемента', sale: '30' },
  { id: 2, text: 'По выходным', sale: '20' },
  { id: 3, text: 'По промокодам', sale: '20' },
];

const RootSlider: React.FC = () => {
  const bg = (id: number) => (id % 2 === 0 ? 'bg-red-200' : 'bg-emerald-200');
  return (
    <div className="flex gap-4 overflow-x-auto ">
      {slides.map(slide => (
        <div
          key={slide.id}
          className={clsx('rounded-md h-28 min-w-[180px] p-[10px] flex flex-col justify-center gap-1', bg(slide.id))}
        >
          <h3 className="leading-5 text-slate-600 line-clamp-2">{slide.text}</h3>
          <p className="text-xl font-medium line-clamp-1">
            <span className="text-xl font-medium">{slide.sale} %</span> Скидка
          </p>
        </div>
      ))}
    </div>
  );
};

export default RootSlider;
