import { IoCloseOutline } from 'react-icons/io5';
import { IProductBottles, IProductCategory, IResponseOrder } from '../../types/api.types';
import { filterTodayOrder } from '../../utils/filterTodayOrder';
import { createTitleForTodayOrder } from '../../utils/createTitleForTodayOrder';
import { useDeleteOrder } from '../../hooks/useDeleteOrder';

interface DeliveryTodayProps {
  todayOrder: IResponseOrder;
  bottles: IProductBottles[] | undefined;
  categories: IProductCategory[] | undefined;
}

const DeliveryToday: React.FC<DeliveryTodayProps> = ({ todayOrder, bottles, categories }) => {
  const filteredOrder = filterTodayOrder(todayOrder, bottles);
  const title = createTitleForTodayOrder(categories, todayOrder);
  const queryDeleteOrder = useDeleteOrder(todayOrder.id);

  const deleteOrder = () => {
    queryDeleteOrder.mutate();
  };

  return (
    <div className="w-full px-2 pt-3 pb-4 border bg-white border-sky-400 rounded-md">
      <div className="px-4">
        <div className="">
          <h3 className="mb-3 text-lg font-medium">Вода: {title}</h3>
          {filteredOrder?.map(bottle => (
            <div key={bottle.size} className="w-full flex items-center mb-2">
              <img src={bottle.src} alt={bottle.src} />
              <div className="ml-4 flex items-center gap-2 flex-1">
                <p className="text-lg font-medium">{bottle.size} Литров</p>
                <IoCloseOutline className="text-xl font-medium" />
                <p className="text-lg font-medium">{bottle.amount}</p>
              </div>
            </div>
          ))}
          <p className="">К оплате: {todayOrder.price} руб</p>
          <p className="">Адрес: {todayOrder.address}</p>
          <button
            onClick={deleteOrder}
            className="px-3 py-1 mt-3 rounded-md bg-rose-500 text-gray-100
         active:ring-2 active:ring-rose-400 active:ring-offset-2 transition"
          >
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryToday;
