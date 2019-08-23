import React, { Component } from 'react';
import {
	Alert,
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Draggable from '../components/Draggable';
import Sound from 'react-native-sound';
import appStyle from '../statics/styles/appStyle';

export default class MusicGameScreen extends Component {

	constructor(props) {
		super(props);
		this.instruments = this.randomIntruments(props.config.instruments);
		this.dropZones = [];
		this.playMusic(props.config.music);

		this.state = {
			containerZone: null,
			countTruety: [],
			count: 0,
			failed: false,
			gameOver: false,
			btn: require('../statics/images/stop.png'),
			stop: false
		};
	}

	playMusic(sound) {
		Sound.setCategory('Playback', true);
		if(this.song) {
			this.setState({ stop: false, btn: require('../statics/images/stop.png') });
			this.stopSong();
		}
		this.song = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			this.song.play();
		});
	}

	randomIntruments(instruments) {
		let random = [];		
		while (random.length != 5) {
			let number = Math.floor((Math.random() * 5));
			if (!random.some(ran => ran == number)) {
				random.push(number);
			}
		} 
		return random.map(ran => instruments[ran]);
	}

	componentWillUnmount() {
		this.stopSong();
	}

	stopSong() {
		this.song.stop().release();
	}
	
	stopOrPlay() {
		if (!this.state.stop) {
			this.setState({ stop: true, btn: require('../statics/images/play.png') });
			this.stopSong();
		} else {
			this.setState({ stop: false, btn: require('../statics/images/stop.png') });
			this.playMusic(this.props.config.music);
		}
	}

	setContainerZone(event) {
		this.setState({ containerZone: event.nativeEvent.layout });
	}

	setDropZoneValues(event) {
		this.dropZones.push(event.nativeEvent.layout);
	}

	updateCountTrue(event) {
		if (!this.state.countTruety.some(instrument => instrument === event)) {
			this.state.countTruety.push(event);
			setTimeout(() => {
				if (this.state.countTruety.length === 3) {
					this.setState({ gameOver: true });
					Actions.musicGameOver({ 'config': this.props.config });
				}
			}, 100);
		}
	}

	updateCount(event) {
		setTimeout(() => {
			this.setState(previousState => {
				return { count: previousState.count + 1 };
			});
		}, 150);

		setTimeout(() => {
			if (this.state.count === 3 && !this.state.gameOver) {
				this.setState({ count: 0, countTruety: [], failed: true });
				Alert.alert(
					'Lo sentimos',
					'¡Intenta de nuevo!',
					[
						{ text: 'Ok', onPress: () => console.log('fail') }

					],
					{ cancelable: false }
				);
				this.setState({ count: 0, failed: false });
			}
		}, 200);
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.backgroudLevel} source={this.props.config.background}>
					<View>
						<TouchableOpacity onPress={() => this.stopOrPlay()}>
							<Image style={styles.btnPlayOrStop} source={this.state.btn} />
						</TouchableOpacity>
					</View>
					<Image style={styles.title} source={this.props.config.title} />
					<View onLayout={this.setContainerZone.bind(this)} style={styles.containerDropInstruments}>
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
						<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone} />
					</View>
					<View style={styles.containerImagesIntruments}>
						{
							this.instruments
								.map((instrument) => {
									return (
										<View key={instrument.name} style={styles.containerIntruments}>
											<Draggable playSoundInstrument={this.playMusic.bind(this)} failure={this.state.failed} countInstruments={this.updateCount.bind(this)} countTrue={this.updateCountTrue.bind(this)} containerzone={this.state.containerZone} dropzones={this.dropZones} instrument={instrument} />
											<Text style={styles.descriptionInstrument}>{instrument.name}</Text>
										</View>
									);
								})
						}
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);