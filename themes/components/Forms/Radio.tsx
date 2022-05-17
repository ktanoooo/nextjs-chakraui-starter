import { Radio as BaseRadio, RadioProps } from '@chakra-ui/react'

export const Radio: React.FC<RadioProps> = ({ children, ...props }) => <BaseRadio {...props}>{children}</BaseRadio>
