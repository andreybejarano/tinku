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

export default class MusicGameScreen extends Component<{}> {

  goToMusicGameScreen(){
    this.props.navigator.resetTo({
      screen: 'MusicGameScreen',
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
      <View style={{flex:1, flexDirection:'row'}}>
        <TouchableHighlight onPress={(this.goToMusicGameScreen.bind(this))} style={{flex:1, backgroundColor: '#FF00FF'}}>
          <Text style={{color: '#FFFFFF'}}>Tango</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={(this.goToMusicGameScreen.bind(this))} style={{flex:1, backgroundColor: '#FFFF00'}}>
          <Text style={{color: '#FFFFFF'}}>Huayno</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={(this.goToMusicGameScreen.bind(this))} style={{flex:1, backgroundColor: '#0000FF'}}>
          <Text style={{color: '#FFFFFF'}}>Samba</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={(this.goToMusicGameScreen.bind(this))} style={{flex:1, backgroundColor: '#00FFFF'}}>
          <Text style={{color: '#FFFFFF'}}>Cumbia</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create(appStyle);
