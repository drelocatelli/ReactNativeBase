import React from 'react';
import { SafeAreaView, Text, Stylesheet } from 'react-native';
import App from './src/components/index'

export default () => {
  console.warn('ola mundo')
  return(
    <SafeAreaView>
      <App />
      <Text>Hello world!</Text>
    </SafeAreaView>
  )
}

// const style = Stylesheet.create({

// });
