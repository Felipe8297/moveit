import { useApp, useUser } from '@realm/react'
import { Power } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import theme from '@/theme'

import * as S from './styles'

export function HomeHeader() {
  const app = useApp()
  const user = useUser()
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 32

  function handleLogout() {
    app.currentUser?.logOut()
  }

  return (
    <S.Container style={{ paddingTop }}>
      <S.Picture
        source={{ uri: user?.profile.pictureUrl }}
        placeholder="L184i9offQof00ayfQay~qj[fQj["
      />
      <S.Greeting>
        <S.Message>Olá,</S.Message>
        <S.Name>{user?.profile.name}</S.Name>
      </S.Greeting>

      <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </S.Container>
  )
}
