import { useState } from 'react'
export const useUpdateValue = () => {
  const [value, setValue] = useState<string[]>([]);

  const updateValue = (newValue: string) => {
    setValue([newValue]);
  };

  return [value, updateValue] as const;
};
