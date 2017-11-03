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
				music: 'cumbia.mp3',
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
				music: 'huaino.mp3',
				instruments: [
					{
						name: 'Sikus',
						valid: true,
						img: require('../statics/images/instrumentos/sikus.png')
					},
					{
						name: 'Charango',
						valid: true,
						img: require('../statics/images/instrumentos/charango.png')
					},
					{
						name: 'Bombo',
						valid: true,
						img: require('../statics/images/instrumentos/bombo.png')
					},
					{
						name: 'Guiro',
						valid: false,
						img: require('../statics/images/instrumentos/guiro.png')
					},
					{
						name: 'Agogo',
						valid: false,
						img: require('../statics/images/instrumentos/agogo.png')
					}
				]
			},
			samba: {
				name: 'Samba',
				title: require('../statics/images/sambaTitulo.png'),
				background: require('../statics/images/fondoSamba.png'),
				backgroudGameover: require('../statics/images/fondoSambaFin.png'),
				music: 'samba.mp3',
				instruments: [
					{
						name: 'Pandeiro',
						valid: true,
						img: require('../statics/images/instrumentos/pandeiro.png')
					},
					{
						name: 'Tantan',
						valid: true,
						img: require('../statics/images/instrumentos/tantan.png')
					},
					{
						name: 'Surdo',
						valid: true,
						img: require('../statics/images/instrumentos/surdo.png')
					},
					{
						name: 'Arpa',
						valid: false,
						img: require('../statics/images/instrumentos/arpa.png')
					},
					{
						name: 'Barimbaru',
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
				music: 'tango.mp3',
				instruments: [
					{
						name: 'Violín',
						valid: true,
						img: require('../statics/images/instrumentos/violin.png')
					},
					{
						name: 'Bandoneón',
						valid: true,
						img: require('../statics/images/instrumentos/bandoneon.png')
					},
					{
						name: 'Piano',
						valid: true,
						img: require('../statics/images/instrumentos/piano.png')
					},
					{
						name: 'Sikus',
						valid: false,
						img: require('../statics/images/instrumentos/sikus.png')
					},
					{
						name: 'Maracas',
						valid: false,
						img: require('../statics/images/instrumentos/maracas.png')
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
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('cumbia')} style={[styles.touchable, { flex: 1}]}>
						<Image style={[styles.touchable, { width: '100%', height: '100%' }]} source={require('../statics/images/fondoMenuCumbia.jpg')}>
							<Image source={require('../statics/images/cumbia.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('tango')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: '100%', height: '100%' }]} source={require('../statics/images/fondoMenuTango.jpg')}>
							<Image source={require('../statics/images/tango.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('samba')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: '100%', height: '100%' }]} source={require('../statics/images/fondoMenuSamba.jpg')}>
							<Image source={require('../statics/images/samba.png')} />
						</Image>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.goToMusicGameScreen('huaino')} style={[styles.touchable, { flex: 1 }]}>
						<Image style={[styles.touchable, { width: '100%', height: '100%' }]} source={require('../statics/images/fondoMenuHuaino.jpg')}>
							<Image source={require('../statics/images/huaino.png')} />
						</Image>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);