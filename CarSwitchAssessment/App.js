import React from 'react';
import {StatusBar, View} from 'react-native';
import Home from './src/Screens/Home';

const App = () => {
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </View>
  );
};

export default App;
