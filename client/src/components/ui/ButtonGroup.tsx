import clsx from 'clsx';
import React from 'react';
import { IButtonGroup } from '../../types/types';

interface ButtonGroupProps {
  buttonGroup: IButtonGroup[];
  activeButton: string;
  // setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  setActiveButton: (name: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttonGroup, activeButton, setActiveButton }) => {
  return (
    <div className="w-full flex justify-between bg-gray-200 rounded-md text-sm mb-4">
      {buttonGroup.map(item => (
        <button
          key={item.name}
          onClick={() => setActiveButton(item.name)}
          className={clsx('px-2 py-1 rounded-md flex-1', activeButton === item.name && 'bg-sky-500 text-gray-100')}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
