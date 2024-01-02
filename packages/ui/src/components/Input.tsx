import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const Input: React.FC<CustomInputProps> = ({
                                                   width,
                                                   height,
                                                   color,
                                                   ...props
                                                 }) => {
  const baseStyles = 'border px-4 py-2 rounded focus:outline-none';

  return (
    <input
      className={`${baseStyles} ${color}`}
      style={{ width, height }}
      {...props}
    />
  );
};

