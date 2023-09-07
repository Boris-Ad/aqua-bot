import { IoFileTrayFullOutline } from 'react-icons/io5';
import { IResponseOrder } from '../../types/api.types';
import Tooltip from '../ui/Tooltip';
import { Link } from 'react-router-dom';

interface AdminListItemProps {
  delivery: IResponseOrder;
  inx: number;
}

const AdminCompletedListItem: React.FC<AdminListItemProps> = ({ delivery, inx }) => {
  return (
    <div className="grid grid-cols-12 py-2 hover:bg-slate-100">
      <span className="text-center">{inx + 1}</span>
      <span className="text-center">{delivery.userTelegId}</span>
      <span className="col-span-2 text-center">{new Date(delivery.createdAt).toLocaleTimeString()}</span>
      <span className="col-span-2 text-center">{new Date(delivery.deletedAt).toLocaleTimeString()}</span>
      <span className="col-start-7 col-end-12 whitespace-nowrap overflow-x-hidden pl-6">{delivery.address}</span>
      <div className="flex justify-center gap-3 items-center">
        <Link to={'/admin/deliveries-today/' + delivery.id} className="inline-block relative group">
          <IoFileTrayFullOutline className="w-5 h-5 text-slate-600 cursor-pointer hover:scale-110 transition-all" />
          <Tooltip place='left'>Информация о заказе</Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default AdminCompletedListItem;
