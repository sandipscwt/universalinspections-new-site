import React, { useState } from 'react';

interface RadioGroupProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, value, onChange }) => {
  const [selected, setSelected] = useState(value || '');

  const handleChange = (option: string) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center px-[10px] space-y-2 sm:space-y-0 sm:space-x-6">
      <span className="text-[#2C3037] font-glacial-regular">{label}</span>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-1 font-glacial-regular text-[#2C3037]"
          >
            <input
              type="radio"
              name={label}
              value={option}
              checked={selected === option}
              onChange={() => handleChange(option)}
              className="accent-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
