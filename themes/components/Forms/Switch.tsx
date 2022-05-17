import { Switch as BaseSwitch, SwitchProps } from '@chakra-ui/react'

export const Switch: React.FC<SwitchProps> = ({ children, ...props }) => <BaseSwitch {...props}>{children}</BaseSwitch>
