import { Appearance, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store, persistedStore } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/navigation/Navigation'
import EStyleSheet from 'react-native-extended-stylesheet'
import SplashScreen from './src/screen/SplashScreen'

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'light') {
  EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $DARK: '#000000',
    $DARK_LIGHT: '#333',
    $WHITE: '#FFFFFF',
    $PRIMARY: '#d6c4c1',
    $BACKGROUND: '#f1f1f1',
    $TEXT: '#000',
    $ALPHA_TEXT: '#d1d1d1',
    $GREY: '#dcdcdc',
    $CARD_BACKGROUND: '#fff',
    $ERROR: '#ff0000',
  });
}else{
  EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $DARK: '#000000',
    $DARK_LIGHT: '#333',
    $WHITE: '#FFFFFF',
    $PRIMARY: '#d6c4c1',
    $BACKGROUND: '#210d09',
    $TEXT: '#fff',
    $ALPHA_TEXT: '#d1d1d1',
    $GREY: '#dcdcdc',
    $CARD_BACKGROUND: '#333',
    $ERROR: '#ff0000',
  });
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<SplashScreen />}
        persistor={persistedStore}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))} 
        
      >
        <Navigation />
      </PersistGate>
    </Provider>
  )
}

export default App
