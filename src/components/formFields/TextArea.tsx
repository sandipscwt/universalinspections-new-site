import React from "react";

type NativeTextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "rows">;

interface TextAreaProps extends NativeTextAreaProps {
  label?: string;
  icon?: React.ReactNode;
  error?: boolean;
  rows?: number;
  widthClassName?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      placeholder,
      icon,
      error = false,
      disabled = false,
      rows = 4,
      className,
      id,
      name,
      widthClassName = "w-full",
      ...rest // includes value, defaultValue, onChange, onBlur, etc.
    },
    ref
  ) => {
    // prefer explicit id, else use name, else fallback to label-based
    const safeId = id || (typeof name === "string" ? name : label?.replace(/\s+/g, "_"));

    return (
      <div className={`flex flex-col ${widthClassName}`}>
        {label && (
          <label className="mb-1 text-sm font-glacial-regular text-[#2C3037]" htmlFor={safeId}>
            {label}
          </label>
        )}

        <div className="relative w-full">
          {icon && <div className="absolute left-3 top-3 text-gray-400">{icon}</div>}

          <textarea
            id={safeId}
            name={name}
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={[
              "w-full py-2 px-3 rounded-md border resize-none font-glacial-regular text-[#2C3037] placeholder-[#2C3037]",
              icon ? "pl-10" : "",
              error ? "border-red-500" : "border-gray-300",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400",
              className || "",
            ].join(" ")}
            {...rest}
          />
        </div>

        {error && <span className="text-red-500 text-sm mt-1">This field is required</span>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
