import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

type TextAreaInputProps = TextInputProps & {
  label: string
}

const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(
  ({ label, ...rest }, ref) => {
    const { COLORS } = useTheme()

    return (
      <S.Container>
        <S.Label>{label}</S.Label>

        <S.Input
          ref={ref}
          placeholderTextColor={COLORS.GRAY_400}
          multiline
          autoCapitalize="sentences"
          {...rest}
        />
      </S.Container>
    )
  },
)

export { TextAreaInput }
