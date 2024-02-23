import { Car, Key } from 'phosphor-react-native'
import { TouchableOpacityProps } from 'react-native'

import theme from '@/theme'

import * as S from './styles'

type CartStatusProps = TouchableOpacityProps & {
  licensePlate?: string | null
}

export function CartStatus({ licensePlate = null, ...rest }: CartStatusProps) {
  const Icon = licensePlate ? Car : Key
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso.`
    : 'Nenhum veículo em uso.'
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <S.Container {...rest}>
      <S.IconBox>
        <Icon size={32} color={theme.COLORS.BRAND_LIGHT} />
      </S.IconBox>
      <S.Message>
        {message}
        <S.TextHighlight>
          {' '}
          Clique aqui para registrar a {status}
        </S.TextHighlight>
      </S.Message>
    </S.Container>
  )
}
