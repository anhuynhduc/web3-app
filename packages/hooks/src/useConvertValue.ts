import { useUpdateValue } from "@custom/hooks";

const useConvertValue = () => {
  const [value, setValue] = useUpdateValue()

  setValue("hello")
}

export default useConvertValue