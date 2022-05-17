import { Checkbox as BaseCheckbox, CheckboxProps } from '@chakra-ui/react'

export const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => (
  <BaseCheckbox {...props}>{children}</BaseCheckbox>
)
