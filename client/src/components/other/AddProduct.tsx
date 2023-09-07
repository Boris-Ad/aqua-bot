import { IProduct } from '../../types/types';
import OrderSize from '../orders/OrderSize';

interface AddProductProps {
  children: React.ReactNode;
  bottles?: IProduct[];
}

const AddProduct: React.FC<AddProductProps> = ({ children, bottles }) => {
  return (
    <div className="w-full border bg-white border-sky-400 rounded-md ">
      {children}
      <div className="px-5 pb-4 space-y-2">
        {bottles && bottles.map(bottle => <OrderSize key={bottle.id} src={bottle.src} size={bottle.bottleSize} price={bottle.price} />)}
      </div>
    </div>
  );
};

export default AddProduct;
