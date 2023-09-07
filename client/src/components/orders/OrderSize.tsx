import React from 'react';
import { useOrderStore } from '../../store/useOrder';

interface OrderSizeProps {
  src: string;
  size: number;
  price: number;
}

const OrderSize: React.FC<OrderSizeProps> = ({ src, size, price }) => {
  const [setBottle5, setBottle10, setBottle20] = useOrderStore(state => [state.setBottle5, state.setBottle10, state.setBottle20]);
  const [setPriceBottle5, setPriceBottle10, setPriceBottle20] = useOrderStore(state => [
    state.setPriceBottle5,
    state.setPriceBottle10,
    state.setPriceBottle20,
  ]);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (size === 5) {
      setBottle5(value);
      setPriceBottle5(value * price);
    } else if (size === 10) {
      setBottle10(value);
      setPriceBottle10(value * price);
    } else {
      setBottle20(value);
      setPriceBottle20(value * price);
    }
  }, [value]);

  const incrementOrder = () => {
    setValue(value > 9 ? value : value + 1);
  };

  const decrementOrder = () => {
    setValue(value ? value - 1 : value);
  };

  return (
    <div className="w-full flex items-center">
      <img src={src} alt={src} />
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium leading-5">{size} Литров</h3>
        <span className="">Сумма: {price * value} руб</span>
      </div>
      <div className="w-24 h-6 px-2 border border-sky-600 rounded flex justify-between items-center">
        <button onClick={decrementOrder} className="">
          -
        </button>
        <span>{value}</span>
        <button onClick={incrementOrder}>+</button>
      </div>
    </div>
  );
};

export default OrderSize;
