import React, { Component } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import appStyle from '../statics/styles/appStyle';

export default class MainScreen extends Component {

	onMusicListScreen() {
		Actions.musicListScreen();
	}

	onRunScreen() {
		Actions.runScreen();		
	}


	render() {
		return (
			<View style={[styles.container]}>
				<Image style={styles.backgroundScreen} source={require('../statics/images/fondoMain.png')}>
					<Image style={styles.tituloMain} source={require('../statics/images/tituloMain.png')} />
					<TouchableOpacity onPress={() => this.onMusicListScreen()}>
						<Image style={styles.btnJugar} source={require('../statics/images/btnJugar.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.onRunScreen()}>
						<Image style={styles.btnJugar} source={require('../statics/images/btnJugar.png')} />
					</TouchableOpacity>
				</Image>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);