/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MusicGameScreen from "../components/MusicGameScreen";
import appStyle from '../statics/styles/appStyle'; 

export default class App extends Component<{}> {
  render() {
    const config = {
      name: 'Cumbia',
      background: require('../statics/images/fondoCumbia.jpg'),
      instruments: [
        {
          name: 'Maracas', 
          valid: true, 
          img: require('../statics/images/instrumentos/maracas.png')
        },
        {
          name: 'Tambora', 
          valid: true, 
          img: require('../statics/images/instrumentos/tambora.png')
        },
        {
          name: 'Gaita', 
          valid: true, 
          img: require('../statics/images/instrumentos/gaita.png')
        },
        {
          name: 'Arpa', 
          valid: false, 
          img: require('../statics/images/instrumentos/arpa.png')
        },
        {
          name: 'Birimbao', 
          valid: false, 
          img: require('../statics/images/instrumentos/barimbaru.png')
        }
      ]
    }
    return (
      <View style={styles.container}>
        <MusicGameScreen config={config}></MusicGameScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create(appStyle);
