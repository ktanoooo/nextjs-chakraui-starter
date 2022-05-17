import { Box, BoxProps } from '@chakra-ui/react'

interface IPaddingProps {
  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
  px?: number
  py?: number
  children: React.ReactNode
}
export const Padding: React.FC<IPaddingProps> = ({ children, ...props }) => <Box {...props}>{children}</Box>
