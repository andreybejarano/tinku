'use strict'

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import appStyle from '../statics/styles/appStyle';

const window = Dimensions.get('window');

export default class MainScreen extends Component<{}> {

  componentDidMount() {
    setTimeout(() => this.goToMainScreen(), 5000)
  }

  goToMainScreen(){
    this.props.navigator.resetTo({
      screen: 'MusicWorldScreen',
      animated: true
    });
  }

  constructor(props){
    super(props);
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    return (
      <ImageBackground style={{flex:1, width: window.width, height: window.height}}
        source={require('../statics/images/mapa.png')}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(appStyle);
