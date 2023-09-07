import type { IconType } from 'react-icons';

interface InputProps {
  name: string;
  label: string;
  type: 'text' | 'password';
  Icon: IconType;
}

const Input: React.FC<InputProps> = ({ name, label, type, Icon }) => {
  return (
    <div className="mx-auto w-full">
      <div>
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
            <Icon />
          </div>
          <input
            type={type}
            id={name}
            name={name}
            className="block w-full rounded-md border-gray-300 pl-10
             shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed
              disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
