import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PanResponder,
	Animated
} from 'react-native';
import Sound from 'react-native-sound';


export default class Draggable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY()
		};

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, {
				dx: this.state.pan.x,
				dy: this.state.pan.y
			}]),
			onPanResponderRelease: (e, gesture) => {
				if (this.isDropZone(gesture)) {
					this.props.countInstruments();
					if(this.props.instrument.valid) {
						this.updateCountTrue();
					}
				} else {
					Animated.spring(
						this.state.pan,
						{ toValue: { x: 0, y: 0 } }
					).start();
				}
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		let failure = nextProps.failure;
		if (failure) {
			Animated.spring(
				this.state.pan,
				{ toValue: { x: 0, y: 0 } }
			).start();
		}
		failure = false;
	}

	updateCountTrue() {
		this.props.countTrue(this.props.instrument.name);
	}

	isDropZone(gesture) {
		let dz = this.props.containerzone;
		return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height);
	}

	playInstrument() {
		Sound.setCategory('Playback', true);

		let song = new Sound(this.props.instrument.music, Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			this.props.stopSongMain();
			song.play(() => {
				song.release();
			});
		});
	}

	render() {
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout()]}>
				<Image onTouchStart={() => this.playInstrument()} style={styles.instrument} source={this.props.instrument.img} />
			</Animated.View>
		);
	}
}

let styles = StyleSheet.create({
	instrument: {
		marginLeft: 25,
		marginRight: 25,
	}
});
