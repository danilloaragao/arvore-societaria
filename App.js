import React, { useEffect } from 'react'
import { AppLoading } from 'expo'
import { StatusBar} from 'react-native'
import { Roboto_400Regular, Roboto_500Medium, useFonts} from '@expo-google-fonts/roboto'
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu'
import * as SplashScreen from 'expo-splash-screen';

import Routes from './src/routes'

export default function App() {
  state = {
    appIsReady: false,
  };
  

  const [fonstLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  SplashScreen.preventAutoHideAsync();

  if(!fonstLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar barStyle="dark-content"
               backgroundColor="transparent"
               translucent
    />

    <Routes/>
    </>
  )
}