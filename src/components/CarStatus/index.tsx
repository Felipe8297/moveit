import { Car, Key } from 'phosphor-react-native'

import theme from '@/theme'

import * as S from './styles'

type CartStatusProps = {
  licensePlate?: string | null
}

export function CartStatus({ licensePlate = null }: CartStatusProps) {
  const Icon = licensePlate ? Car : Key
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso.`
    : 'Nenhum veículo em uso.'
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <S.Container>
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
