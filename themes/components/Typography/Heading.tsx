import { Heading as BaseHeading, HeadingProps } from '@chakra-ui/react'

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => (
  <BaseHeading {...props}>{children}</BaseHeading>
)
