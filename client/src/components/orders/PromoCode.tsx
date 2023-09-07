import React from 'react';
import clsx from 'clsx';
import { IoCodeOutline, IoChevronDownOutline } from 'react-icons/io5';

const PromoCode: React.FC = () => {
  const [promoInputVisibility, setPromoInputVisibility] = React.useState(false);

  return (
    <div className={clsx('overflow-hidden transition-all duration-300', promoInputVisibility ? 'h-[86px]' : 'h-10')}>
      <button
        onClick={() => setPromoInputVisibility(prev => !prev)}
        className="w-full p-2 flex gap-3 items-center rounded-md bg-gradient-to-r from-sky-600 to-sky-300 text-white"
      >
        <IoCodeOutline />
        <p className="flex-1 text-start">Использовать промокод</p>
        <IoChevronDownOutline className={clsx('transition-transform duration-300', promoInputVisibility && 'rotate-180')} />
      </button>

      <div
        className={clsx('relative mt-1 z-0 flex transition-transform duration-300', !promoInputVisibility && 'translate-y-full')}
      >
        <input
          type="url"
          id="example8"
          autoComplete='off'
          className="block w-full rounded-md rounded-r-none text-gray-700 border-sky-400 shadow-sm focus:z-10 focus:border-primary-400 
          focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
           disabled:bg-gray-50 disabled:text-gray-500"
        />
        <button className="flex items-center space-x-1 rounded-md rounded-l-none border border-l-0 border-sky-400 px-2.5 text-gray-700 hover:bg-gray-100">
          <span>Применить</span>
        </button>
      </div>
    </div>
  );
};

export default PromoCode;
