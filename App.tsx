import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { AppProvider, UserProvider } from '@realm/react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from '@/components/Loading'
import { Home } from '@/screens/Home'
import { SignIn } from '@/screens/SignIn'

import theme from './src/theme'

export default function App() {
  const RealmId = process.env.EXPO_PUBLIC_REALM_APP_ID as string // caso der algum erro olhar aqui para ver se o RealmId está correto

  console.log('RealmId', RealmId)

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <AppProvider id={RealmId}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <UserProvider fallback={SignIn}>
          <Home />
        </UserProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
