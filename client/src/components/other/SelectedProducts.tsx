import { IProduct } from '../../types/types';
import SelectedProductsItem from './SelectedProductsItem';

interface SelectedProductProps {
  orders: IProduct[];
}

const SelectedProducts: React.FC<SelectedProductProps> = ({ orders}) => {
  
  
  return (
    <div className="text-sky-600 space-y-2">
      {orders.map(item => (
        <SelectedProductsItem key={item.id} src={item.src} size={item.bottleSize} />
      ))}
    </div>
  );
};

export default SelectedProducts;
