import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, disabled, fullWidth, danger, secondary }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        'focus-visible:outline2 flex justify-center rounded-md px-3 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-offset-2',
        disabled && 'cursor-default opacity-50',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        fullWidth && 'w-full',
        secondary ? 'text-gray-900' : 'text-white',
        !secondary && !danger && 'bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-600'
      )}
    >
      {children}
    </button>
  );
};

export default Button;