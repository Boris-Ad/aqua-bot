import React from 'react';
import AdminTodayDeliveriesList from '../../components/admin/AdminTodayDeliveriesList';
import AdminTodayCompletedDeliveriesList from '../../components/admin/AdminTodayCompletedDeliveriesList';
import { useLoadOrders } from '../../hooks/admin/useLoadOrders';
import { getOrdersDeliveryToday } from '../../utils/getOrdersDeliveryToday';
import { getOrdersCompletedDeliveryToday } from '../../utils/getOrdersCompletedDeliveryToday';

const AdminTodayDeliveriesPage: React.FC = () => {
  const { data: orders } = useLoadOrders();
  const todayDeliveries = getOrdersDeliveryToday(orders || []);
  const ordersCompletedDeliveryToday = getOrdersCompletedDeliveryToday(orders || []);
  return (
    <div className="px-4">
      <AdminTodayDeliveriesList todayDeliveries={todayDeliveries} />
      <AdminTodayCompletedDeliveriesList ordersCompletedDeliveryToday={ordersCompletedDeliveryToday} />
    </div>
  );
};

export default AdminTodayDeliveriesPage;
