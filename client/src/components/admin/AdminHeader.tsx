import { IoLogOutOutline } from 'react-icons/io5';

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

const AdminHeader: React.FC = () => {
  const navigate = useNavigate();
  const userName = useAuthStore(state => state.login);
  const removeToken = useAuthStore(state => state.removeToken);

  const logout = () => {
    removeToken();
    navigate('/auth', { replace: true });
  };
  return (
    <header className="flex w-full items-center justify-between gap-5 px-6 py-3 text-neutral-700">
      <div className="flex items-center gap-2">
        <span>{userName}</span>
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-2 rounded-md border border-cyan-800 bg-cyan-800 px-3 py-1.5
         text-center text-sm font-medium text-white shadow-sm transition-all hover:border-cyan-700
        hover:bg-cyan-700 focus:ring focus:ring-primary-200"
      >
        Выход <IoLogOutOutline className={'h-6 w-6'} />
      </button>
    </header>
  );
};

export default AdminHeader;