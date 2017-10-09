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
import appStyle from '../statics/styles/appStyle'; 

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroudLevel} source={require('../statics/images/backgroud_level.png')}>
          <Text style={styles.title}>
            LA CUMBIA DE TINKU
          </Text>
          <Text style={styles.label}>
            Autor de la cancion
          </Text>
          <View style={styles.containerDropInstruments}>
            <View style={styles.dropIntrument}></View>
            <View style={styles.dropIntrument}></View>
            <View style={styles.dropIntrument}></View>
          </View>
          <View style={styles.containerImagesIntruments}>
            <Image style={styles.instrument} source={require('../statics/images/bandeoneon.png')}/>
            <Image style={styles.instrument} source={require('../statics/images/gaita.png')}/>
            <Image style={styles.instrument} source={require('../statics/images/maracas.png')}/>
            <Image style={styles.instrument} source={require('../statics/images/tambora.png')}/>
            <Image style={styles.instrument} source={require('../statics/images/zikus.png')}/>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create(appStyle);
