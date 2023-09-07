import { IResponseOrder } from '../../types/api.types';
import AdminCompletedListItem from './AdminCompletedListItem';

interface AdminTodayCompletedDeliveriesListProps {
  ordersCompletedDeliveryToday: IResponseOrder[];
}

const AdminTodayCompletedDeliveriesList: React.FC<AdminTodayCompletedDeliveriesListProps> = ({
  ordersCompletedDeliveryToday,
}) => {
  return (
    <>
      {ordersCompletedDeliveryToday.length > 0 && (
        <>
          <h3 className="text-xl font-medium">Выполненные доставки</h3>
          <div className="w-full my-3 p-2 rounded-md border border-gray-300 shadow-sm bg-white divide-y">
            <div className="grid grid-cols-12 py-2 font-medium">
              <span className="text-center">Кол-во</span>
              <span className="text-center">TelegramId</span>
              <span className="col-span-2 text-center whitespace-nowrap overflow-x-hidden">Время заказа</span>
              <span className="col-span-2 text-center whitespace-nowrap overflow-x-hidden">Время выполнения</span>
              <span className="col-start-7 col-end-12 whitespace-nowrap pl-6">Адрес</span>
            </div>
            {ordersCompletedDeliveryToday.map((delivery, inx) => (
              <AdminCompletedListItem key={delivery.id} delivery={delivery} inx={inx} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AdminTodayCompletedDeliveriesList;
