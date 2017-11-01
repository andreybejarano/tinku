import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PanResponder,
	Animated
} from 'react-native';

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
				this.props.countInstruments();
				if (this.isDropZone(gesture)) {
					this.updateCountTrue();
				} else {
					console.log(this.state.pan);
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
		this.props.countTrue();
	}

	isDropZone(gesture) {
		let dz = this.props.containerzone;
		return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && this.props.instrument.valid;
	}

	render() {
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout()]}>
				<Image style={styles.instrument} source={this.props.instrument.img} />
				<Text style={styles.descriptionInstrument}>{this.props.instrument.name}</Text>
			</Animated.View>
		);
	}
}

let styles = StyleSheet.create({
	instrument: {
		marginLeft: 25,
		marginRight: 25,
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 35,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
