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

const window = Dimensions.get('window');

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
			<View style={[styles.container, {width: window.width, height: window.height}]}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('cumbia')} style={[styles.touchable, { flex: 1}]}>
						<Image style={[styles.touchable, { width: window.width, height: window.height }]} source={require('../statics/images/fondoMenuCumbia.jpg')}>
							<Image style={{width: window.width*0.062, height:window.height*0.805 }} source={require('../statics/images/cumbia.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('tango')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: window.width, height: window.height }]} source={require('../statics/images/fondoMenuTango.jpg')}>
							<Image style={{width: window.width*0.062, height:window.height*0.805 }} source={require('../statics/images/tango.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('samba')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: window.width, height: window.height }]} source={require('../statics/images/fondoMenuSamba.jpg')}>
							<Image style={{width: window.width*0.067, height:window.height*0.805 }} source={require('../statics/images/samba.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('huaino')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: window.width, height: window.height }]} source={require('../statics/images/fondoMenuHuaino.jpg')}>
							<Image style={{width: window.width*0.057, height:window.height*0.805 }} source={require('../statics/images/huaino.png')} />
						</Image>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);