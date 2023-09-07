import { FaTruckFast } from 'react-icons/fa6';
import { IoHomeOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface BannerRootProps {
  src: string;
  title: string;
  bottom_position?: string;
  category:string
}

const BannerRoot: React.FC<BannerRootProps> = ({ src, title, bottom_position = 'bottom-0',category }) => {
  return (
    <div className="w-full p-3 relative rounded-lg bg-gradient-to-b from-sky-300 to-sky-600 text-gray-50">
      <img src={src} alt={src} width={146} className={clsx('absolute right-0', bottom_position)} />
      <h3 className="text-white text-lg">{title}</h3>
      <p>10:00 - 18:00</p>
      <div className="flex gap-2">
        <IoHomeOutline className="text-white" />
        <span className="text-sm">Доставка к дому</span>
      </div>
      <div className="flex items-center gap-2">
        <FaTruckFast className="text-white w-4 h-4" />
        <span className="text-sm">Авто-развозка</span>
      </div>
      <Link to={"/order/" + category } className="inline-block px-5 py-1 mt-2 rounded-md bg-white text-sm text-gray-600">
        Заказать
      </Link>
    </div>
  );
};

export default BannerRoot;
