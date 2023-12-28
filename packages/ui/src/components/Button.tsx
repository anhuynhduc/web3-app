import React from "react";

interface ButtonProps {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="w-[100px] h-[40px] bg-blue-400">{children}</button>;
};