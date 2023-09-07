import { IResponseOrder } from '../../types/api.types';


interface AdminDeliveriesToMonthListItemProps {
  inx: number;
  order: IResponseOrder;
}

const AdminDeliveriesToMonthListItem: React.FC<AdminDeliveriesToMonthListItemProps> = ({ inx, order }) => {
 
  return (
    <div className="divide-y mb-4">
      <p className="font-medium my-2">{inx}.</p>
      <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
        <p>Telegram id:</p>
        <span className="col-span-5">{order?.userTelegId}</span>
      </div>
      <div className="hover:bg-slate-200 grid grid-cols-6 p-1 rounded">
        <p>Дата заявки:</p>
        <span className="col-span-5">{new Date(order?.createdAt || '').toLocaleString()}</span>
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
  );
};

export default AdminDeliveriesToMonthListItem;
