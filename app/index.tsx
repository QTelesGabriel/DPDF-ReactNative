import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Navegacao from '@/app/routes/Navegacao';

export default function Index() {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" />
      <Navegacao />
    </NativeBaseProvider>
  );
}