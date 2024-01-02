import { useState } from 'react'
const useUpdateValue = () => {
  const [value, setValue] = useState<any>("hello");

  const updateValue = (newValue: any) => {
    setValue([newValue]);
  };

  return [value, updateValue] as const;
};

export default useUpdateValue