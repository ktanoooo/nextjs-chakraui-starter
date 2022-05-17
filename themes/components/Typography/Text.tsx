import { Text as BaseText, TextProps, Box, TypographyProps } from '@chakra-ui/react'

interface IFontWeightProps {
  fontWeight: TypographyProps['fontWeight']
}
export const Text: React.FC<TextProps & IFontWeightProps> = ({ children, ...props }) => {
  const { fontWeight, ...rest } = props

  if (fontWeight) {
    return (
      <Box fontWeight={fontWeight}>
        <BaseText {...rest}>{children}</BaseText>
      </Box>
    )
  } else {
    return <BaseText {...props}>{children}</BaseText>
  }
}
