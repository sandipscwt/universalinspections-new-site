import React, { ReactNode, ChangeEvent } from "react";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode | string; 
  width?: string;
  height?: string;
  type?: string;
  required?: boolean;
  clickable?: boolean; 
  onIconClick?: () => void; 
}

const InputfileComponent: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  icon,
  width = "w-full",
  height = "h-[45px]",
  type = "text",
  required = false,
  clickable = false,
  onIconClick,
}) => {
  return (
    <div className={`flex flex-col ${width}`}>
      {label && (
        <label
          className="text-[#2C3037] text-sm font-medium mb-1"
          htmlFor={label}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div
        className={`relative flex items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm ${height}`}
      >
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 px-4 pr-10 font-glacial-regular  text-[#2C3037] ] placeholder-[#2C3037] focus:outline-none rounded-md"
        />

        {icon && (
          <div
            className={`absolute right-3 flex items-center justify-center ${
              clickable ? "cursor-pointer hover:opacity-80" : "pointer-events-none"
            }`}
            onClick={clickable ? onIconClick : undefined}
          >
            {typeof icon === "string" ? (
              <img src={icon} alt="icon" className="w-5 h-5 opacity-80" />
            ) : (
              icon
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputfileComponent;
