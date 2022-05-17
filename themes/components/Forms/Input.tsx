import { Input as BaseInput, InputProps, NumberInput as BaseNumberInput, NumberInputProps } from '@chakra-ui/react'

export const Input: React.FC<InputProps> = ({ children, ...props }) => <BaseInput {...props}>{children}</BaseInput>

export const NumberInput: React.FC<NumberInputProps> = ({ children, ...props }) => (
  <BaseNumberInput {...props}>{children}</BaseNumberInput>
)
