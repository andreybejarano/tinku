import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import appStyle from '../../statics/styles/appStyle';
import MusicGame from "../../components/MusicGame";

export default class MusicGameScreen extends Component {

  constructor(props){
    super(props);
    this.state = {jojo:require('../../statics/images/backgroud_level.png')};
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    const config = {
      name: 'Cumbia',
      title: require('../../statics/images/cumbiaTitulo.png'),
      background: require('../../statics/images/fondoCumbia.png'),
      instruments: [
        {
          name: 'Maracas',
          valid: true,
          img: require('../../statics/images/instrumentos/Maracas.png'),
          sound: require('../../statics/music/instrumentos/maracas.mp3')
        },
        {
          name: 'Tambora',
          valid: true,
          img: require('../../statics/images/instrumentos/Tambora.png'),
          sound: require('../../statics/music/instrumentos/tambora.mp3')
        },
        {
          name: 'Gaita',
          valid: true,
          img: require('../../statics/images/instrumentos/Gaita.png'),
          sound: require('../../statics/music/instrumentos/gaita.mp3')
        },
        {
          name: 'Arpa',
          valid: false,
          img: require('../../statics/images/instrumentos/Arpa.png'),
          sound: require('../../statics/music/instrumentos/arpa.mp3')
        },
        {
          name: 'Birimbao',
          valid: false,
          img: require('../../statics/images/instrumentos/Birimbao.png'),
          sound: require('../../statics/music/instrumentos/birimbao.mp3')
        }
      ]
    }
    return (
      <View style={styles.container}>
        <MusicGame config={config}></MusicGame>
      </View>
    );
  }
}

const styles = StyleSheet.create(appStyle);
