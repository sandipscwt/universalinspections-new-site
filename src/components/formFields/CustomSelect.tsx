// components/CustomSelect.tsx
import React, { useState, useRef, useEffect } from 'react';

interface OptionType {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label?: string;
    options: OptionType[];
    value?: OptionType | null;
    onChange?: (selected: OptionType | null) => void;
    placeholder?: string;
    isMulti?: boolean;
    error?: boolean;
    required?: boolean;
    disabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    options,
    value,
    onChange,
    placeholder = "Select...",
    // isMulti = false,
    error = false,
    required = false,
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter options based on search term
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Focus input when dropdown opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleToggle = () => {
        if (disabled) return;
        setIsOpen(!isOpen);
        setSearchTerm('');
    };

    const handleSelect = (option: OptionType) => {
        if (onChange) {
            onChange(option);
        }
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = () => {
        if (onChange) {
            onChange(null);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // const displayValue = value ? value.label : '';

    return (
        <div className="flex flex-col  w-full relative" ref={selectRef}>
            {label && (
                <label className="mb-1 text-sm font-glacial-regular text-[#2C3037] ">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {/* Select Trigger */}
            <div
                className={`
          relative flex items-center justify-between w-full px-[10px]  h-[45px] border rounded-md
          bg-white  cursor-pointer transition-colors font-glacial-regular
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-50' : 'hover:border-gray-400'}

        `}
                //   ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''}
                onClick={handleToggle}
            >
                <span className={`truncate ${!value ? 'text-[#2C3037]' : 'text-[#2C3037]'}`}>
                    {value ? value.label : placeholder}
                </span>

                <div className="flex items-center space-x-2 ml-2">
                    {value && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClear();
                            }}
                            className="text-[#2C3037] hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                    <svg
                        className={`w-4 h-4 text-[#2C3037] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-hidden">
                    {/* Search Input */}
                    <div className="p-2 border-b border-gray-200">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 border font-glacial-regular text-[#2C3037] border-gray-300 font-glacial-regular rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Options List */}
                    <div className="max-h-48 overflow-y-auto">
                        {filteredOptions.length === 0 ? (
                            <div className="p-3 text-center font-glacial-regular text-gray-500">No options found</div>
                        ) : (
                            filteredOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`
                    p-3 cursor-pointer transition-colors border-b font-glacial-regular border-gray-100 last:border-b-0
                    ${value?.value === option.value
                                            ? 'bg-blue-500 text-white'
                                            : 'hover:bg-gray-50 text-gray-700'
                                        }
                  `}
                                    onClick={() => handleSelect(option)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{option.label}</span>
                                        {value?.value === option.value && (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            {error && <span className="text-red-500 font-glacial-regular   mt-1">This field is required</span>}
        </div>
    );
};

export default CustomSelect;