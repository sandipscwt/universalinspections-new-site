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
          checked:bg-blue-500
          focus:outline-none 
          disabled:bg-gray-200 font-glacial-regular disabled:border-gray-400
        "
      />
      <span className={`text-[#000000] font-glacial-regular ${disabled ? 'text-gray-400' : ''}`}>{label}</span>
    </label>
  );
};

export default CheckBox;
