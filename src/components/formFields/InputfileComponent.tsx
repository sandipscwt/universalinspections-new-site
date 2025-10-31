import Image from "next/image";
import React, { ReactNode } from "react";

// Accept all native input props so RHF's register can inject name/onChange/onBlur/ref/etc.
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

interface InputFieldProps extends NativeInputProps {
  label?: string;
  icon?: ReactNode | string;
  width?: string;   // tailwind wrapper width
  height?: string;  // tailwind input height
  clickable?: boolean;
  onIconClick?: () => void;
}

const InputfileComponent = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      placeholder,
      icon,
      width = "w-full",
      height = "h-[45px]",
      type = "text",
      required = false,
      clickable = false,
      onIconClick,
      id,
      className,
      ...rest // <-- includes name, value, defaultValue, onChange, onBlur, etc. from RHF
    },
    ref
  ) => {
    // Prefer an explicit id, else use name, else fall back to a safe label-based id
    const safeId =
      id || (typeof rest.name === "string" ? rest.name : label?.replace(/\s+/g, "_"));

    return (
      <div className={`flex flex-col ${width}`}>
        {label && (
          <label
            className="text-[#2C3037] font-glacial-regular text-[clamp(14px,4vw,18px)] font-medium mb-1"
            htmlFor={safeId}
          >
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}

        <div className={`relative flex items-center bg-white border border-[#2A2D3461] rounded-md shadow-sm ${height}`}>
          <input
            id={safeId}
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`flex-1 px-4 pr-10 font-glacial-regular text-[clamp(12px,4vw,16px)] text-[#000000] placeholder-[#000000] focus:outline-none rounded-md ${className || ""}`}
            {...rest} 
          />

          {icon && (
            <div
              className={`absolute right-3 flex items-center justify-center ${
                clickable ? "cursor-pointer hover:opacity-80" : "pointer-events-none"
              }`}
              onClick={clickable ? onIconClick : undefined}
            >
              {typeof icon === "string" ? (
                <span className="relative w-5 h-5 opacity-80 block">
                  <Image src={icon} alt="icon" fill className="object-contain" />
                </span>
              ) : (
                icon
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputfileComponent.displayName = "InputfileComponent";
export default InputfileComponent;
