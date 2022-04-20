import { useEffect, useState } from 'react'
import * as Font from 'expo-font';
import ButtonCounter from "./ButtonCounter";

export default function App() {
  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
   }, [])

  return(
    <ButtonCounter />
  );
  
}