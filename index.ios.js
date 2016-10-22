// Index.ios.js - place code in here for IOS!

// import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Portfolio from './src/components/Portfolio';

//create a Component
const App = () => (
  <View style={{ flex: 1 }}>
      <Header headerText={'Music Albums'}/>
      <Portfolio />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
