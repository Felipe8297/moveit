import { TextInputProps } from 'react-native'

import theme from '@/theme'

import * as S from './styles'

type LicensePlateInputProps = TextInputProps & {
  label: string
}

export function LicensePlateInput({ label, ...rest }: LicensePlateInputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        maxLength={7}
        autoCapitalize="characters"
        placeholderTextColor={theme.COLORS.GRAY_400}
        {...rest}
      />
    </S.Container>
  )
}
