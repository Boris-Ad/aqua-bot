import { useNavigate, useParams } from 'react-router-dom';
import { useLoadOrders } from '../../hooks/admin/useLoadOrders';
import Button from '../../components/ui/Button';

const AdminOrderPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data } = useLoadOrders();
  const order = data?.find(order => order.id === parseInt(params.id || ''));

  return (
    <div className="p-4">
      <div className="p-2 border rounded">
        <h3 className="text-lg font-medium my-2">Информация о заказе:</h3>
        <div className="divide-y">
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Telegram id:</p>
            <span className="col-span-5">{order?.userTelegId}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Дата заявки:</p>
            <span className="col-span-5">{new Date(order?.createdAt || '').toLocaleString()}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Дата доставки:</p>
            {order?.completed ? (
              <span className="col-span-5">{new Date(order?.deletedAt || '').toLocaleString()}</span>
            ) : (
              'Не доставлено'
            )}
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Адрес доставки:</p>
            <span className="col-span-5">{order?.address}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>Категория:</p>
            <span className="col-span-5">{order?.categoryName}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>5л:</p>
            <span className="col-span-5">{order?.bottle5}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>10л:</p>
            <span className="col-span-5">{order?.bottle10}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>20л:</p>
            <span className="col-span-5">{order?.bottle20}</span>
          </div>
          <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
            <p>К оплате:</p>
            <span className="col-span-5">{order?.price} руб.</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-3">
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </div>
    </div>
  );
};
export default AdminOrderPage;
