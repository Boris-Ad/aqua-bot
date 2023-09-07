import { IOptions } from "../../types/types";


interface CustomSelectProps {
  label: string;
  name: string;
  options: IOptions[];
  onChange: (value: string) => void
  value:string
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, name, options, onChange,value }) => {
  return (
    <div className="max-w-xs">
      <label htmlFor={name} className="mb-1 block text-base font-normal text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300
                   focus:ring focus:ring-primary-200 focus:ring-opacity-50 "
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
