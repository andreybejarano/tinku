import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
import Orientation from 'react-native-orientation';
let width = window.width;
let height = window.height;
width = Orientation.getInitialOrientation() == 'PORTRAIT' ? Dimensions.get('window').height : Dimensions.get('window').width;
height = Orientation.getInitialOrientation() == 'PORTRAIT' ? Dimensions.get('window').width : Dimensions.get('window').height;
export default {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundScreen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: width,
		height: height,
	},
	backgroudLevel: {
		width: width,
		height: height,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tituloMain: {
		width: width * 0.405,
		height: height * 0.355,
	},
	btnJugar: {
		width: width * 0.305,
		height: height * 0.105,
		marginTop: height * 0.10,
	},
	btnPlayOrStop: {
		marginBottom: width * 0.02,
		width: width * 0.07,
		height: height * 0.12,
	},
	title: {
		marginBottom: width * 0.02,
		height: height * 0.10,
		width: height * 0.50,
	},
	titleGameover: {
		marginTop: 40,
		height: height * 0.13,
		width: width * 0.4,
	},
	stars: {
		width: width * 0.41,
		height: height * 0.25,
	},
	label: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 30,
	},
	containerDropInstruments: {
		height: height * 0.28,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: height * 0.01,
	},
	dropZone: {
		borderRadius: (height * 0.28) / 2,
		borderWidth: 3,
		borderStyle: 'dashed',
		borderColor: '#724212',
		backgroundColor: '#ffffff',
		height: height * 0.28,
		width: height * 0.28,
		margin: 15,
	},
	containerIntruments: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerImagesIntruments: {
		flexDirection: 'row',
		height: height * 0.15,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: height * 0.15,
	},
	instrument: {
		width: width * 0.10,
		height: height * 0.17,
		marginLeft: width * 0.020,
		marginRight: width * 0.020,
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#fff',
		fontSize: window.fontScale * 35,
		margin: width * 0.010,
		justifyContent: 'center',
		alignItems: 'center',
	},
	touchable: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundSplash: {
		width: width * 0.40,
		height: height * 0.70
	}
};