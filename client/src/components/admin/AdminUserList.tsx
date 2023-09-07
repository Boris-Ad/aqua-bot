import { useGetUsersQuery } from '../../hooks/admin/useGetUsers';
import AdminUserListItem from './AdminUserListItem';

const AdminUserList: React.FC = () => {
  const { data: users } = useGetUsersQuery();
  
  return (
    <>
      <h3 className="text-xl font-medium">Информация о клиентах:</h3>
      <div className="w-full my-4 p-2 rounded-md border border-gray-300 shadow-sm bg-white divide-y">
        <div className="grid grid-cols-12 py-2 font-medium">
          <span className="text-center">Кол-во</span>
          <span className="text-center">TelegramId</span>
          <span className="col-span-2 text-center">Дата регистрации</span>
          <span className="col-span-2 text-center">Количество заказов</span>
          <span className="col-start-7 col-end-12 whitespace-nowrap pl-6">Адрес</span>
        </div>
        {users?.map((user, inx) => (
          <AdminUserListItem key={user.telegId} inx={inx + 1} user={user} />
        ))}
      </div>
    </>
  );
};

export default AdminUserList;
