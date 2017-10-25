import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import appStyle from '../statics/styles/appStyle';


export default class MusicGameScreen extends Component {

	constructor(props) {
		super(props);
	}

	static navigatorStyle = {
		navBarHidden: true
	};

	render() {
		return (
			<ImageBackground style={styles.backgroudLevel} source={this.props.config.background}>
				<Text style={styles.title}>
					{this.props.config.name.toUpperCase()}
				</Text>
				<View style={styles.containerDropInstruments}>
					<View style={styles.dropIntrument}></View>
					<View style={styles.dropIntrument}></View>
					<View style={styles.dropIntrument}></View>
				</View>
				<View style={styles.containerImagesIntruments}>
					<View>
						<Image style={styles.instrument} source={this.props.config.instruments[0].img} />
						<Text style={styles.descriptionInstrument}>{this.props.config.instruments[0].name}</Text>
					</View>
					<View>
						<Image style={styles.instrument} source={this.props.config.instruments[1].img} />
						<Text style={styles.descriptionInstrument}>{this.props.config.instruments[1].name}</Text>
					</View>
					<View>
						<Image style={styles.instrument} source={this.props.config.instruments[2].img} />
						<Text style={styles.descriptionInstrument}>{this.props.config.instruments[2].name}</Text>
					</View>
					<View>
						<Image style={styles.instrument} source={this.props.config.instruments[3].img} />
						<Text style={styles.descriptionInstrument}>{this.props.config.instruments[3].name}</Text>
					</View>
					<View>
						<Image style={styles.instrument} source={this.props.config.instruments[4].img} />
						<Text style={styles.descriptionInstrument}>{this.props.config.instruments[4].name}</Text>
					</View>
					
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create(appStyle);