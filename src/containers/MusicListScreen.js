import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	View,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import appStyle from '../statics/styles/appStyle';

export default class MusicListScreen extends Component {

	constructor(props) {
		super(props);
		this.config = {
			cumbia: {
				name: 'Cumbia',
				title: require('../statics/images/cumbiaTitulo.png'),
				background: require('../statics/images/fondoCumbia.png'),
				backgroudGameover: require('../statics/images/fondoCumbiaFin.png'),
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
			},
			huaino: {
				name: 'Huaino',
				title: require('../statics/images/huainoTitulo.png'),
				background: require('../statics/images/fondoHuaino.png'),
				backgroudGameover: require('../statics/images/fondoHuainoFin.png'),
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
			},
			samba: {
				name: 'Samba',
				title: require('../statics/images/sambaTitulo.png'),
				background: require('../statics/images/fondoSamba.png'),
				backgroudGameover: require('../statics/images/fondoSambaFin.png'),
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
			},
			tango: {
				name: 'Tango',
				title: require('../statics/images/tangoTitulo.png'),
				background: require('../statics/images/fondoTango.png'),
				backgroudGameover: require('../statics/images/fondoTangoFin.png'),
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
		};
	}

	goToMusicGameScreen(music) {
		Actions.musicGameScreen({ 'config': this.config[music] });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('cumbia')} style={[styles.touchable, { flex: 1, backgroundColor: '#FF00FF' }]}>
						<Image source={require('../statics/images/cumbia.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('tango')} style={[styles.touchable, { flex: 1, backgroundColor: '#FFFF00' }]}>
						<Image source={require('../statics/images/tango.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('samba')} style={[styles.touchable,{ flex: 1, backgroundColor: '#0000FF' }]}>
						<Image source={require('../statics/images/samba.png')} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('huaino')} style={[styles.touchable,{ flex: 1, backgroundColor: '#00FFFF' }]}>
						<Image source={require('../statics/images/huaino.png')} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);