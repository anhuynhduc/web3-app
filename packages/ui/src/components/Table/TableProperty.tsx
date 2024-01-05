import React, { HTMLAttributes } from 'react';
import '../../../../../src/app/globals.css'

interface CustomTableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean;
}

export const TableCell: React.FC<CustomTableCellProps> = ({
                                                                  children,
                                                                  isHeader = false,
                                                                  className,
                                                                  ...props
                                                                }) => {
  const baseStyles = ' border border-slate-400 border-t-0 border-x-0';
  const cellStyles = isHeader ? 'font-bold' : '';

  return React.createElement(
    isHeader ? 'th' : 'td',
    {
      className: `${baseStyles} ${cellStyles} ${className}`,
      ...props,
    },
    children
  );
};

interface CustomTableRowProps extends HTMLAttributes<HTMLTableRowElement> {

}

export const TableRow: React.FC<CustomTableRowProps> = ({ children, className, ...props }) => {

  return (
    <tr className={`last-row ${className}`} {...props}>
      {children}
    </tr>
  );
};
