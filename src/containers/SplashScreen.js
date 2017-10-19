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

export default class SplashScreen extends Component<{}> {

  componentDidMount() {
    console.log('jojo')
    setTimeout(() => this.goToMainScreen(), 3000)
  }

  goToMainScreen(){
    this.props.navigator.resetTo({
      screen: 'MainScreen',
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
      <Image style={{flex:1, width: window.width, height: window.height}}
        source={require('../statics/images/splash_animation/LOGO_18.png')}/>
    );
  }
}

const styles = StyleSheet.create(appStyle);
