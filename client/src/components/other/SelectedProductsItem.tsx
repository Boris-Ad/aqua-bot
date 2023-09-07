import { IoCloseOutline } from 'react-icons/io5';
import { useOrderStore } from '../../store/useOrder';

interface SelectedProductItemProps {
  src: string;
  size: number;
}

const SelectedProductItem: React.FC<SelectedProductItemProps> = ({ src, size }) => {
  const [bottle5, bottle10, bottle20] = useOrderStore(state => [state.bottle5, state.bottle10, state.bottle20]);
  return (
    <div className="w-full flex items-center">
      <img src={src} alt={src} />
      <div className="ml-4 flex items-center gap-2 flex-1">
        <p className="text-lg font-medium">{size} Литров</p>
        <IoCloseOutline className="text-xl font-medium" />
        <p className="text-lg font-medium">{size === 5 ? bottle5 : size === 10 ? bottle10 : bottle20}</p>
      </div>
    </div>
  );
};

export default SelectedProductItem;
