import clsx from 'clsx';
import { IoListOutline, IoHomeOutline, IoCalendarNumberOutline, IoPersonOutline,IoSettingsOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { colorActiveLink } from '../../utils/colorActiveLink';

const AdminNavbar: React.FC = () => {
  const location = useLocation();
  const links = [
    { id: 1, to: '/admin', title: 'Главная', icon: <IoHomeOutline className="h-5 w-5" /> },
    { id: 2, to: '/admin/deliveries-today', title: 'Доставки сегодня', icon: <IoListOutline className="h-5 w-5" /> },
    { id: 3, to: '/admin/deliveries-to-month', title: 'Доставки на месяц', icon: <IoCalendarNumberOutline className="h-5 w-5" /> },
    { id: 4, to: '/admin/customers', title: 'Клиенты', icon: <IoPersonOutline className="h-5 w-5" /> },
    { id: 5, to: '/admin/setting', title: 'Настройка', icon: <IoSettingsOutline className="h-5 w-5" /> },
  ];

  return (
    <div className="h-full w-full p-2">
      <span className="block text-center text-lg">Aqua</span>
      <div className="flex flex-col gap-4 px-3 mt-10">
        {links.map(link => (
          <Link
            key={link.id}
            to={link.to}
            className={clsx('flex items-center gap-3 text-lg', colorActiveLink(location.pathname, link.to))}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminNavbar;
