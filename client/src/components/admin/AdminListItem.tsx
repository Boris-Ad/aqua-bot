import { IoFileTrayFullOutline, IoArrowRedoOutline } from 'react-icons/io5';
import { IResponseOrder } from '../../types/api.types';
import Tooltip from '../ui/Tooltip';
import { useSetOrderCompleted } from '../../hooks/admin/useSetOrderCompleted';
import { Link } from 'react-router-dom';

interface AdminListItemProps {
  delivery: IResponseOrder;
  inx: number;
}

const AdminListItem: React.FC<AdminListItemProps> = ({ delivery, inx }) => {
  const mutation = useSetOrderCompleted(delivery.id);
  const isCompletedOrder = () => {
    mutation.mutate();
  };
  return (
    <div key={delivery.id} className="grid grid-cols-12 py-2 hover:bg-slate-100">
      <span className="text-center">{inx + 1}</span>
      <span className="text-center">{delivery.userTelegId}</span>
      <span className="col-span-2 text-center">{new Date(delivery.createdAt).toLocaleTimeString()}</span>
      <span className="text-center">{delivery.categoryName}</span>
      <span className="col-start-6 col-end-12 whitespace-nowrap pl-6">{delivery.address}</span>
      <div className="flex justify-center gap-3 items-center">
        <Link to={'/admin/deliveries-today/' + delivery.id} className="inline-block relative group">
          <IoFileTrayFullOutline className="w-5 h-5 text-slate-600 cursor-pointer hover:scale-110 transition-all" />
          <Tooltip place='left'>Информация о заказе</Tooltip>
        </Link>

        <div className="relative group">
          <IoArrowRedoOutline onClick={isCompletedOrder} className="w-5 h-5 text-slate-600 cursor-pointer hover:scale-110 transition-all" />
          <Tooltip place='left'>Доставлено</Tooltip>
        </div>
      </div>
    </div>
  );
};

export default AdminListItem;
