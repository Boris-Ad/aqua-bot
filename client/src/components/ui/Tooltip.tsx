import clsx from 'clsx';

interface TooltipProps {
  children: React.ReactNode;
  place?: 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, place }) => {
  return (
    <div
      className={clsx(
        'w-max p-1 absolute -top-10  bg-white border rounded  invisible group-hover:visible shadow-md',
        place === 'left' ? '-translate-x-2/3' : place === 'right' ? '-translate-x-[10%]' : 'left-1/2 -translate-x-1/2'
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;
