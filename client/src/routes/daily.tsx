import React from 'react';
import { useParams } from 'react-router-dom';
import DeliveryAddress from '../components/orders/DeliveryAddress';
import DateSelection from '../components/daily/DateSelection';
import InformationAboutOrder from '../components/other/InformationAboutOrder';
import DateDelivery from '../components/other/DateDelivery';
import AddressDelivery from '../components/other/AddressDelivery';
import PriceDelivery from '../components/other/PriceDelivery';
import { useOrderStore } from '../store/useOrder';
import AddProduct from '../components/other/AddProduct';
import ButtonLinkGroup from '../components/ui/ButtonLinkGroup';
import { useLoadProductCategories } from '../hooks/useLoadProductCategories';
import { useLoadProductsByCategory } from '../hooks/useLoadProductsByCategory';
import { createTitleForTodayOrder } from '../utils/createTitleForTodayOrder';
import { useSendOrder } from '../hooks/useSendOrder';
import { useDailyDateState } from '../store/daily-date.store';

const DailyPage: React.FC = () => {
  const params = useParams();
  const category = params.category ?? '';
  const { data: categories } = useLoadProductCategories();
  const { data: products } = useLoadProductsByCategory(category);
  const [address, setAddress] = React.useState('');
  const sendOrder = useSendOrder(category, address, true);
  const title = createTitleForTodayOrder(categories, params.category || '');
  const totalPrice = useOrderStore(state => state.totalPrice);
  const resetDataOrder = useOrderStore(store => store.resetDataOrder);
  const [dailyWeek, deliveryDays] = useDailyDateState(state => [state.dailyWeek, state.deliveryDays]);
  const resetDelivery = useDailyDateState(store => store.resetDelivery);

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
      <h3 className="text-lg font-medium">Заказать доставку по расписанию</h3>
      <div className="w-full my-3 flex flex-col gap-2 border bg-white border-sky-400 rounded-md">
        <DateSelection />
      </div>
      <DeliveryAddress setAddressDelivery={addAddress} />
      <AddProduct bottles={products}>
        <div className="p-2 pb-0">
          <ButtonLinkGroup buttonGroup={categories || []} />
        </div>
      </AddProduct>
      <InformationAboutOrder handleSubmit={handleSubmit} category={title} selectedProducts={products || []}>
        <DateDelivery dailyWeek={dailyWeek} deliveryDays={deliveryDays} />
        <AddressDelivery address={address} />
        <PriceDelivery price={totalPrice} />
      </InformationAboutOrder>
    </div>
  );
};

export default DailyPage;
