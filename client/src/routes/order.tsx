import React from 'react';
import { useParams } from 'react-router-dom';
import TotalCounter from '../components/orders/TotalCounter';
import PromoCode from '../components/orders/PromoCode';
import DeliveryAddress from '../components/orders/DeliveryAddress';
import InformationAboutOrder from '../components/other/InformationAboutOrder';
import AddProduct from '../components/other/AddProduct';
import AddressDelivery from '../components/other/AddressDelivery';
import PriceDelivery from '../components/other/PriceDelivery';
import { useOrderStore } from '../store/useOrder';
import { useLoadProductsByCategory } from '../hooks/useLoadProductsByCategory';
import { useSendOrder } from '../hooks/useSendOrder';
import { createTitleForTodayOrder } from '../utils/createTitleForTodayOrder';
import { useLoadProductCategories } from '../hooks/useLoadProductCategories';
import { useDailyDateState } from '../store/daily-date.store';

const OrderPage: React.FC = () => {
  const params = useParams();
  const category = params.category || '';

  const { data: products } = useLoadProductsByCategory(params.category ?? '');
  const { data: categories } = useLoadProductCategories();
  const [address, setAddress] = React.useState('');
  const resetDataOrder = useOrderStore(state => state.resetDataOrder);
  const totalPrice = useOrderStore(state => state.totalPrice);
  const resetDelivery = useDailyDateState(store => store.resetDelivery);
  const title = createTitleForTodayOrder(categories, category);
  const sendOrder = useSendOrder(category, address, false);

  const handleSubmit = async () => {
    await sendOrder();
  };

  const addAddress = React.useCallback(
    (address: string) => {
      setAddress(address);
    },
    [address]
  );

  React.useEffect(() => {
    return () => {
      resetDataOrder();
      resetDelivery();
    };
  }, []);

  return (
    <div className="text-sky-600 space-y-4">
      <AddProduct bottles={products}>
        <div className="p-2 mb-3 border-b-[1px] border-sky-400">
          <h3 className="text-lg font-medium">Сделать заказ</h3>
        </div>
      </AddProduct>

      <TotalCounter totalPrice={totalPrice} />
      <PromoCode />
      <DeliveryAddress setAddressDelivery={addAddress} />
      <InformationAboutOrder handleSubmit={handleSubmit} category={title} selectedProducts={products ?? []}>
        <AddressDelivery address={address} />
        <PriceDelivery price={totalPrice} />
      </InformationAboutOrder>
    </div>
  );
};

export default OrderPage;
