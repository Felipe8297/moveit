import { useNavigation } from '@react-navigation/native'

import { CartStatus } from '@/components/CarStatus'
import { HomeHeader } from '@/components/HomeHeader'

import * as S from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToDeparture() {
    navigation.navigate('departure')
  }

  return (
    <S.Container>
      <HomeHeader />
      <S.Content>
        <CartStatus
          licensePlate="XXX-000"
          onPress={handleNavigateToDeparture}
        />
      </S.Content>
    </S.Container>
  )
}
