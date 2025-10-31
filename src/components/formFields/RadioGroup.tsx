import React, { useState } from "react";
import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  Path,
} from "react-hook-form";

interface RadioGroupProps<TFieldValues extends FieldValues = FieldValues> {
  label: string;
  options: string[];

  // RHF (optional)
  name?: Path<TFieldValues>;
  register?: UseFormRegister<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;

  // Non-RHF fallback (uncontrolled)
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroup = <TFieldValues extends FieldValues = FieldValues>({
  label,
  options,
  name,
  register,
  rules,
  value,
  onChange,
}: RadioGroupProps<TFieldValues>) => {
  const usingRHF = Boolean(register && name);

  // Local state only when NOT using RHF
  const [selected, setSelected] = useState(value || "");

  const handleLocalChange = (val: string) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center px-[10px] space-y-2 sm:space-y-0 sm:space-x-6">
      <span className="text-[#2C3037] font-glacial-regular">{label}</span>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {options.map((option) => {
          const id = `${(name || label).toString()}-${option}`.replace(/\s+/g, "_");

          return (
            <label
              key={option}
              htmlFor={id}
              className="flex items-center space-x-1 font-glacial-regular text-[#2C3037]"
            >
              {usingRHF ? (
                // RHF path: do NOT pass name manually (register adds it)
                <input
                  id={id}
                  type="radio"
                  value={option}
                  {...register!(name!, rules)}
                  className="accent-blue-600"
                />
              ) : (
                // Non-RHF path: manage selection locally
                <input
                  id={id}
                  type="radio"
                  name={name || label}
                  value={option}
                  checked={selected === option}
                  onChange={() => handleLocalChange(option)}
                  className="accent-blue-600"
                />
              )}
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
