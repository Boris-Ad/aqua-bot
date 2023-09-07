import { TbTruckDelivery } from 'react-icons/tb';
import DeliveryLater from '../components/notifications/DeliveryLater';
import DeliveryToday from '../components/notifications/DeliveryToday';
import { useLoadCurrentOrders } from '../hooks/useLoadCurrentOrders';
import React from 'react';
import { getOrdersDeliveryToday } from '../utils/getOrdersDeliveryToday';
import { getOrdersDeliveryLater } from '../utils/getOrdersDeliveryLater';
import { useLoadProductBottles } from '../hooks/useLoadProductBottles';
import { useLoadProductCategories } from '../hooks/useLoadProductCategories';

const NotificationsPage: React.FC = () => {
  const { data: orders } = useLoadCurrentOrders();
  const { data: bottles } = useLoadProductBottles();
  const { data: categories } = useLoadProductCategories();

  const todayOrders = React.useMemo(() => {
    if (orders) {
      return getOrdersDeliveryToday(orders);
    }
  }, [orders]);

  const laterOrders = React.useMemo(() => {
    if (orders) {
      return getOrdersDeliveryLater(orders);
    }
  }, [orders]);

  return (
    <div className="text-sky-600 space-y-4">
      <div className="w-full p-2 flex gap-3 items-center rounded-md bg-gradient-to-r from-sky-600 to-sky-300 text-white">
        <TbTruckDelivery className="text-2xl" />
        <h3 className="text-lg font-medium">Доставка сегодня:</h3>
      </div>

      {todayOrders?.map(order => (
        <DeliveryToday key={order.id} todayOrder={order} bottles={bottles} categories={categories} />
      ))}
      <div className="w-full p-2 flex gap-3 items-center rounded-md bg-gradient-to-r from-sky-600 to-sky-300 text-white">
        <TbTruckDelivery className="text-2xl" />
        <h3 className="text-lg font-medium">Доставки по расписанию:</h3>
      </div>
      {laterOrders?.map(order => (
        <DeliveryLater key={order.id} laterOrder={order} bottles={bottles} categories={categories} />
      ))}
    </div>
  );
};

export default NotificationsPage;
