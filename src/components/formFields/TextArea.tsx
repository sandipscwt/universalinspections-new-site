import React from 'react';

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  icon?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  icon,
  error = false,
  disabled = false,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm font-glacial-regular text-[#2C3037] ">{label}</label>}
      <div className="relative w-full">
        {icon && <div className="absolute left-3 top-3 text-gray-400">{icon}</div>}
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          className={`
            w-full py-2 px-3 rounded-md border resize-none font-glacial-regular text-[#2C3037] placeholder-[#2C3037]
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring-2 focus:ring-blue-500
            disabled:bg-gray-100 disabled:text-gray-400
          `}
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-1">This field is required</span>}
    </div>
  );
};

export default TextArea;
