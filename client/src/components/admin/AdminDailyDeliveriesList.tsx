import { useLoadOrders } from '../../hooks/admin/useLoadOrders';
import { getArrayDeliveryDays } from '../../utils/getArrayDeliveryDays';
import { getCalendarData } from '../../utils/getCalendarData';
import { getOrdersDeliveryLater } from '../../utils/getOrdersDeliveryLater';
import AdminDailyDeliveriesListItem from './AdminDailyDeliveriesListItem';

const AdminDailyDeliveriesList: React.FC = () => {
  const { currentDay, localeMonth } = getCalendarData();
  const { data } = useLoadOrders();
  const orders = getOrdersDeliveryLater(data || []);
  const deliveryDays = getArrayDeliveryDays(orders);
  return (
    <>
      <h3 className="text-xl font-medium">Доставки на {localeMonth}</h3>
      <div className="w-full my-4 p-2 rounded-md border border-gray-300 shadow-sm bg-white divide-y">
        <div className="grid grid-cols-12 py-2 font-medium">
          <span className="text-center">Дата</span>
          <span className="col-span-3">Количество доставок</span>
          <span className="col-start-12 col-end-13 text-center">Инстр.</span>
        </div>
        {deliveryDays.map(
          item =>
            parseInt(item.day) > currentDay && (
              <AdminDailyDeliveriesListItem key={item.day} day={item.day} delivery={item.delivery} />
            )
        )}
      </div>
    </>
  );
};

export default AdminDailyDeliveriesList;
