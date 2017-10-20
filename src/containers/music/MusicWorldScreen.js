'use strict'

import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import appStyle from '../../statics/styles/appStyle';

const window = Dimensions.get('window');

export default class MusicWorldScreen extends Component<{}> {

  gotToMusicList(){
    this.props.navigator.resetTo({
      screen: 'MusicListScreen',
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
      <ImageBackground style={{flex:1, width: window.width, height: window.height, backgroundColor: '#FF00FF', alignItems:'center', justifyContent:'center'}}
        source={require('../../statics/images/backgroud_level.png')}>
        <TouchableHighlight onPress={(this.gotToMusicList.bind(this))}>
          <Text style={{color: '#FFFFFF'}}>Jugar</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(appStyle);
