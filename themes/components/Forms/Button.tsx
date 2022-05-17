import { Button as BaseButton, ButtonProps } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

export const ButtonTheme = {
  defaultProps: { size: 'md', border: '2px', borderColor: 'green.500' },
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
    height: '48px',
    width: '200px',
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
  },
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => <BaseButton {...props}>{children}</BaseButton>
