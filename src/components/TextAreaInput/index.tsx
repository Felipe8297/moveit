import { TextInputProps } from 'react-native'

import theme from '@/theme'

import * as S from './styles'

type TextAreaInputProps = TextInputProps & {
  label: string
}

export function TextAreaInput({ label, ...rest }: TextAreaInputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        placeholderTextColor={theme.COLORS.GRAY_400}
        multiline
        autoCapitalize="sentences"
        {...rest}
      />
    </S.Container>
  )
}
