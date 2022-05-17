import { Box, BoxProps } from '@chakra-ui/react'

interface IMarginProps {
  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number
  mx?: number
  my?: number
  children: React.ReactNode
}
export const Margin: React.FC<IMarginProps> = ({ children, ...props }) => <Box {...props}>{children}</Box>
