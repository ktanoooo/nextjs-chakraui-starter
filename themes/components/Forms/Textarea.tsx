import { Textarea as BaseTextarea, TextareaProps } from '@chakra-ui/react'

export const Textarea: React.FC<TextareaProps> = ({ children, ...props }) => (
  <BaseTextarea {...props}>{children}</BaseTextarea>
)
