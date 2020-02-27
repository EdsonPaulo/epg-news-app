import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Home } from './src/screens'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,

    };
  }


  render() {
  
      return(
          <Home />
      )
    
  }
}
