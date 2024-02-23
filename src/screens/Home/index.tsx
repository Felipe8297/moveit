import { CartStatus } from '@/components/CarStatus'
import { Header } from '@/components/Header'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <CartStatus licensePlate="XXX-000" />
      </S.Content>
    </S.Container>
  )
}
