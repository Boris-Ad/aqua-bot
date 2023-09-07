import clsx from 'clsx';
import { IButtonGroup } from '../../types/types';
import { useNavigate, useParams } from 'react-router-dom';

interface ButtonLinkGroupProps {
  buttonGroup: IButtonGroup[];
}

const ButtonLinkGroup: React.FC<ButtonLinkGroupProps> = ({ buttonGroup }) => {
  const navigate = useNavigate();
  const params = useParams();
  const category = params.category;

  return (
    <div className="w-full flex justify-between bg-gray-200 rounded-md text-sm mb-4">
      {buttonGroup.map(item => (
        <button
          key={item.name}
          onClick={() => navigate('/daily/' + item.name)}
          className={clsx('px-2 py-1 rounded-md flex-1', category === item.name && 'bg-sky-500 text-gray-100')}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonLinkGroup;
