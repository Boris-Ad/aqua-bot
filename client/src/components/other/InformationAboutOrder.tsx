import React from 'react';
import { IProduct } from '../../types/types';
import SelectedProducts from './SelectedProducts';

interface InformationAboutOrderProps {
  children?: React.ReactNode;
  category: string;
  handleSubmit: () => void;
  selectedProducts: IProduct[];
}

const InformationAboutOrder: React.FC<InformationAboutOrderProps> = ({ children, handleSubmit, category, selectedProducts }) => {
  return (
    <div className="w-full border bg-white border-sky-400 rounded-md">
      <div className="p-2  border-b-[1px] border-sky-400">
        <h3 className="text-lg font-medium">Информация о заказе</h3>
      </div>
      <div className="px-5 pt-4">
        <h3 className="text-lg font-medium mb-3">Вода: {category}</h3>
        <SelectedProducts orders={selectedProducts} />
        {children}
      </div>
      <div className="w-full px-2 pb-2">
        <button onClick={handleSubmit} className="w-full p-2 bg-sky-600 text-gray-100 rounded-md">
          Заказать
        </button>
      </div>
    </div>
  );
};

export default InformationAboutOrder;
