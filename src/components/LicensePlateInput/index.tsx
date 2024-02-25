import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import theme from '@/theme'

import * as S from './styles'

type LicensePlateInputProps = TextInputProps & {
  label: string
}

const LicensePlateInput = forwardRef<TextInput, LicensePlateInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.Input
          ref={ref}
          maxLength={7}
          autoCapitalize="characters"
          placeholderTextColor={theme.COLORS.GRAY_400}
          {...rest}
        />
      </S.Container>
    )
  },
)

export { LicensePlateInput }
