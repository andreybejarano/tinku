import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	View,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import config from '../api/configMusic';
import appStyle from '../statics/styles/appStyle';

export default class MusicListScreen extends Component {

	constructor(props) {
		super(props);
		this.config = config;
	}

	goToMusicGameScreen(music) {
		Actions.musicGameScreen({ 'config': this.config[music] });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('cumbia')} style={{ flex: 1 }}>
						<Image style={styles.touchable} source={require('../statics/images/fondoMenuCumbia.jpg')}>
							<Image style={{ width: '27%', height: '85%' }} source={require('../statics/images/cumbia.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('tango')} style={{ flex: 1 }}>
						<Image style={styles.touchable} source={require('../statics/images/fondoMenuTango.jpg')}>
							<Image style={{ width: '27%', height: '85%' }} source={require('../statics/images/tango.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('samba')} style={{ flex: 1 }}>
						<Image style={styles.touchable} source={require('../statics/images/fondoMenuSamba.jpg')}>
							<Image style={{ width: '29%', height: '85%' }} source={require('../statics/images/samba.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('huaino')} style={{ flex: 1 }}>
						<Image style={styles.touchable} source={require('../statics/images/fondoMenuHuaino.jpg')}>
							<Image style={{ width: '27%', height: '85%' }} source={require('../statics/images/huaino.png')} />
						</Image>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);