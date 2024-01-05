import React, { SelectHTMLAttributes, ChangeEvent } from 'react';

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  onOptionChange?: (value: string) => void;
}

export const Select: React.FC<CustomSelectProps> = ({
                                                      options,
                                                      onOptionChange,
                                                      className,
                                                      ...props
                                                    }) => {
  const baseStyles = 'p-4 rounded';

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onOptionChange) {
      onOptionChange(event.target.value);
    }
  };

  return (
    <select
      className={`${baseStyles} ${className || ''}`}
      onChange={handleSelectChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
