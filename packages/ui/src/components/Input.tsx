import React, { InputHTMLAttributes } from 'react';
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "light" | "primary" | "secondary" | "success" | "danger" | "warning" | "dark" | "info";
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const Input: React.FC<CustomInputProps> = ({
                                                      children,
                                                      width,
                                                      variant,
                                                      height,
                                                      color,
                                                      className,
                                                      ...props
                                                    }) => {
  const baseStyles = 'border px-4 py-2 rounded focus:outline-none';

  let variantStyles: string;

  switch (variant) {
    case 'success':
      variantStyles = 'border-green-500 text-black px-4 py-2 text-green-500';
      break;
    case 'danger':
      variantStyles = 'border-red-500 text-black px-4 py-2 text-red-500';
      break;
    case 'warning':
      variantStyles = 'border-yellow-500 text-black px-4 py-2 text-yellow-500';
      break;
    case 'info':
      variantStyles = 'border-blue-500 text-black px-4 py-2 text-blue-500';
      break;
    default:
      variantStyles = 'border-slate-400 text-black px-4 py-2';
      break;
  }

  return (
    <input
      className={`${className} ${variantStyles} ${baseStyles}`}
      style={{ width, height, color }}
      {...props}
    />
  );
};