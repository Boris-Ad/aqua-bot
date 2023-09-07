import React from 'react';
import clsx from 'clsx';
import { IoHomeOutline, IoCalendarNumberOutline, IoNotificationsOutline, IoPersonOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { id: 1, path: 'home', icon: <IoHomeOutline /> },
  { id: 2, path: 'daily/cleared', icon: <IoCalendarNumberOutline /> },
  { id: 3, path: 'notifications', icon: <IoNotificationsOutline /> },
  { id: 4, path: 'person', icon: <IoPersonOutline /> },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const colorLink = (path1: string, path2: string) => {
    return Boolean(path1.split('/')[1] === path2.split('/')[0]);
  };

  return (
    <footer className="w-full h-14 bg-white flex items-center text-gray-600 text-xl shadow-[0px_0px_10px_6px_rgba(34,60,80,0.13)]">
      {links.map(link => (
        <Link
          key={link.id}
          to={link.path}
          className={clsx('flex flex-1 justify-center', colorLink(location.pathname, link.path) && 'text-sky-700')}
        >
          {link.icon}
        </Link>
      ))}
    </footer>
  );
};

export default Navbar;
