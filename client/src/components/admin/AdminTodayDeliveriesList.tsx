import { IResponseOrder } from '../../types/api.types';
import AdminListItem from './AdminListItem';

interface AdminTodayDeliveriesListProps {
  todayDeliveries: IResponseOrder[];
}

const AdminTodayDeliveriesList: React.FC<AdminTodayDeliveriesListProps> = ({ todayDeliveries }) => {
  return (
    <>
      <h3 className="text-xl font-medium">Доставки ожидающие выполнения</h3>
      {todayDeliveries.length < 1 ? (
        <h3 className="text-lg font-medium">Заявок нет</h3>
      ) : (
        <div className="w-full my-4 p-2 rounded-md border border-gray-300 shadow-sm bg-white divide-y">
          <div className="grid grid-cols-12 py-2 font-medium">
            <span className="text-center">Кол-во</span>
            <span className="text-center">TelegramId</span>
            <span className="col-span-2 text-center">Время заказа</span>
            <span className="text-center">Категория</span>
            <span className="col-start-6 col-end-12 whitespace-nowrap pl-6">Адрес</span>
          </div>
          {todayDeliveries.map((delivery, inx) => (
            <AdminListItem key={delivery.id} delivery={delivery} inx={inx} />
          ))}
        </div>
      )}
    </>
  );
};

export default AdminTodayDeliveriesList;
