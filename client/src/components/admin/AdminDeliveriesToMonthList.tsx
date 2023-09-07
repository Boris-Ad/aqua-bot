import { useNavigate, useParams } from 'react-router-dom';
import { useLoadOrders } from '../../hooks/admin/useLoadOrders';
import { getOrdersDeliveryLater } from '../../utils/getOrdersDeliveryLater';
import AdminDeliveriesToMonthListItem from './AdminDeliveriesToMonthListItem';
import Button from '../ui/Button';

const AdminDeliveriesToMonthList: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useLoadOrders();
  const orders = getOrdersDeliveryLater(data || []);
  const todayOrders = orders.filter(order => order.dailyData.split(' ').includes(params.day || ''));

  return (
    <div className="p-2 border rounded">
      <h3 className="text-lg font-medium my-2">Информация о доставках:</h3>
      {todayOrders.map((order, inx) => (
        <AdminDeliveriesToMonthListItem key={order.id} inx={inx + 1} order={order} />
      ))}
      <div className="flex justify-end my-3">
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
    </div>
  );
};

export default AdminDeliveriesToMonthList;
