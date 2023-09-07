import { Link } from 'react-router-dom';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import Tooltip from '../ui/Tooltip';

interface AdminDailyDeliveriesListItemProps {
  day: string;
  delivery: number;
}

const AdminDailyDeliveriesListItem: React.FC<AdminDailyDeliveriesListItemProps> = ({ day, delivery }) => {
  return (
    <div className="grid grid-cols-12 py-2 hover:bg-slate-100">
      <span className="text-center">{day}</span>
      <span className="text-center">{delivery}</span>
      <div className="col-start-12 col-end-13 text-center">
        <Link to={'/admin/deliveries-to-month/' + day} className="inline-block relative group">
          <IoFileTrayFullOutline className="w-5 h-5 text-slate-600 cursor-pointer hover:scale-110 transition-all" />
          <Tooltip place="left">Информация о доставках</Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default AdminDailyDeliveriesListItem;
