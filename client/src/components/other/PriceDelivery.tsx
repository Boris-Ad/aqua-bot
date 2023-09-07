import React from 'react';
import { IoCashOutline } from 'react-icons/io5';

interface PriceDeliveryProps {
  price: number;
}

const PriceDelivery: React.FC<PriceDeliveryProps> = ({ price }) => {
  return (
    <div className="border-t-[1px]  border-sky-400 mt-4 mb-2 pt-2">
      <div className="flex items-center gap-3">
        <IoCashOutline />
        <p>Сумма для оплаты:</p>
      </div>
      <p className="line-clamp-2">{price} p</p>
    </div>
  );
};

export default PriceDelivery;
