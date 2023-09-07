import { Link } from 'react-router-dom';
import { IResponseUser } from '../../types/api.types';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import Tooltip from '../ui/Tooltip';
import { useGetUsersQuery } from '../../hooks/admin/useGetUsers';

interface AdminUserListItemProps {
  inx: number;
  user: IResponseUser;
}

const AdminUserListItem: React.FC<AdminUserListItemProps> = ({ inx, user }) => {
  const { data: orders } = useGetUsersQuery();

  return (
    <div className="grid grid-cols-12 py-2 hover:bg-slate-100">
      <span className="text-center">{inx}</span>
      <span className="text-center">{user.telegId}</span>
      <span className="col-span-2 text-center">{new Date(user.createdAt).toLocaleDateString()}</span>
      <span className="col-span-2 text-center">{orders?.length}</span>
      <span className="col-start-7 col-end-12 whitespace-nowrap overflow-x-hidden pl-6">{user.address}</span>

      <div className="flex justify-center gap-3 items-center">
        <Link to={'/admin/customers/' + user.telegId} className="inline-block relative group">
          <IoFileTrayFullOutline className="w-5 h-5 text-slate-600 cursor-pointer hover:scale-110 transition-all" />
          <Tooltip place="left">Информация о клиенте</Tooltip>
        </Link>
      </div>
    </div>
  );
};

export default AdminUserListItem;
