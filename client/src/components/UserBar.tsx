import { IoPersonCircleOutline, IoLocationSharp } from 'react-icons/io5';
import { useGetUser } from '../hooks/useGetUser';

const UserBar: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <div className="px-4 py-2 flex gap-3 items-center w-full bg-sky-700 text-slate-200 ">
      {user?.avatar ? (
        <img src={`/avatars/${user.avatar}.png`} width="40" height="40" alt={user.avatar} />
      ) : (
        <IoPersonCircleOutline className="w-9 h-9 " />
      )}

      <div>
        <p className="text-sm font-light">{user?.name ? 'Привет ' + user.name : 'Привет Неизвестный'}</p>
        <div className="flex items-center">
          <IoLocationSharp /> <p className="text-sm font-light ml-1">{user?.address ?? 'Нет адреса для доставки'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBar;
