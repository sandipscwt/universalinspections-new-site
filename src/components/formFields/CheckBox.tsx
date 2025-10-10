import React from 'react';

interface CheckBoxProps {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked = false, onChange, disabled = false }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="
          w-5 h-5 rounded-md border border-gray-500
          checked:bg-blue-500 checked:border-blue-500
          focus:outline-none focus:ring-2 focus:ring-blue-400
          disabled:bg-gray-200 disabled:border-gray-400
        "
      />
      <span className={`text-gray-700 ${disabled ? 'text-gray-400' : ''}`}>{label}</span>
    </label>
  );
};

export default CheckBox;
