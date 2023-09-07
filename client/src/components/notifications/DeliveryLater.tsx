import { IProductBottles, IProductCategory, IResponseOrder } from '../../types/api.types';
import { filterTodayOrder } from '../../utils/filterTodayOrder';
import { createTitleForTodayOrder } from '../../utils/createTitleForTodayOrder';
import { IoCloseOutline } from 'react-icons/io5';
import { useDeleteOrder } from '../../hooks/useDeleteOrder';
import DateDelivery from '../other/DateDelivery';
import { formatStringInArrayNumbers } from '../../utils/formatStringInArrayNumbers';

interface DeliveryLaterProps {
  laterOrder: IResponseOrder;
  bottles: IProductBottles[] | undefined;
  categories: IProductCategory[] | undefined;
}

const DeliveryLater: React.FC<DeliveryLaterProps> = ({ laterOrder, bottles, categories }) => {
  const filteredOrder = filterTodayOrder(laterOrder, bottles);
  const title = createTitleForTodayOrder(categories, laterOrder);
  const queryDeleteOrder = useDeleteOrder(laterOrder.id);
  const { result: deliveryDays } = formatStringInArrayNumbers(laterOrder.dailyData);

  const deleteOrder = () => {
    queryDeleteOrder.mutate();
  };

  return (
    <div className="w-full px-2 pt-3 pb-4 border bg-white border-sky-400 rounded-md ">
      <div className="px-4">
        <div className="">
          <h3 className="mb-3 text-lg font-medium">Вода: {title}</h3>
          <DateDelivery dailyWeek={laterOrder.dailyWeek} deliveryDays={deliveryDays} />
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
          <p className="">К оплате: {laterOrder.price} руб</p>
          <p className="">Адрес: {laterOrder.address}</p>
        </div>
        <button
          onClick={deleteOrder}
          className="px-3 py-1 mt-4 rounded-md bg-rose-500 text-gray-100
         active:ring-2 active:ring-rose-400 active:ring-offset-2 transition"
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default DeliveryLater;
