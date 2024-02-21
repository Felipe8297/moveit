import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Loading } from './src/components/Loading'
import { SignIn } from './src/screens/SignIn'
import theme from './src/theme'

export default function App() {
  const AndroidClientID = process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
