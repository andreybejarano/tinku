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
		this.instruments = props.config.instruments;
		this.dropZones = [];
		this.playMusic();

		this.state = {
			containerZone: null,
			countTruety: 0,
			count: 0,
			failed: false,
			gameOver: false,
			btn: require('../statics/images/stop.png'),
			stop: false
		};
	}

	playMusic() {
		Sound.setCategory('Playback', true);
		this.song = new Sound(this.props.config.music, Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			this.song.play();
		});
	}

	componentWillUnmount() {
		this.stopSong();
	}

	stopSong() {
		this.setState({ stop: true, btn: require('../statics/images/play.png') });
		this.song.stop().release();
	}

	stopOrPlay() {
		if (!this.state.stop) {
			this.stopSong();
		} else {
			this.setState({ stop: false, btn: require('../statics/images/stop.png') });
			this.playMusic();
		}
	}

	setContainerZone(event) {
		this.setState({ containerZone: event.nativeEvent.layout });
	}

	setDropZoneValues(event) {
		this.dropZones.push(event.nativeEvent.layout);
	}

	updateCountTrue(event) {
		this.setState(previousState => {
			return { countTruety: previousState.countTruety + 1 };
		});

		setTimeout(() => {
			if (this.state.countTruety === 3) {
				this.setState({ gameOver: true });
				Actions.musicGameOver({ 'config': this.props.config });
			}
		}, 100);
	}

	updateCount(event) {
		setTimeout(() => {
			this.setState(previousState => {
				return { count: previousState.count + 1 };
			});
		}, 150);

		setTimeout(() => {
			if (this.state.count === 3 && !this.state.gameOver) {
				this.setState({ count: 0, countTruety: 0, failed: true });
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
							<Image source={this.state.btn} />
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
											<Draggable stopSongMain={this.stopSong.bind(this)} failure={this.state.failed} countInstruments={this.updateCount.bind(this)} countTrue={this.updateCountTrue.bind(this)} containerzone={this.state.containerZone} dropzones={this.dropZones} instrument={instrument} />
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