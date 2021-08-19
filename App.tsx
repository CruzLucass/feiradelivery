import React from 'react';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

import { Routes } from './src/routes';
import { Signin } from './src/screens/Signin';

export default function App() {
  return (

    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Signin />
      <Routes />
    </Background>
  );
}