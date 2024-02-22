import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { Realm, useApp } from '@realm/react'
import { useState } from 'react'
import { Alert } from 'react-native'

import BackgroundImg from '@/assets/background.png'
import { Button } from '@/components/Button'

import * as S from './styles'

GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
})

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const app = useApp()

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true)

      const { idToken } = await GoogleSignin.signIn()

      if (idToken) {
        const credentials = Realm.Credentials.jwt(idToken)

        await app.logIn(credentials)
      } else {
        Alert.alert(
          'Entrar',
          'Não foi possível conectar-se a sua conta google tente novamente.',
        )
        setIsAuthenticating(false)
      }
    } catch (error) {
      Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta google.')
      setIsAuthenticating(false)
    }
  }

  return (
    <S.Container source={BackgroundImg}>
      <S.Title>Ignite Fleet</S.Title>
      <S.Slogan>Gestão de uso de veículos.</S.Slogan>
      <Button
        title="Entrar com Google"
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </S.Container>
  )
}
