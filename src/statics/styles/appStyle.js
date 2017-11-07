import { Dimensions } from 'react-native';
const window = Dimensions.get('window');
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
		width: window.width, 
		height: window.height,
	},
	backgroudLevel: {
		width: window.width, 
		height: window.height,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tituloMain: {
		width: window.width*0.405,
		height: window.height*0.355,
	},
	btnJugar: {
		width: window.width*0.305,
		height: window.height*0.105,
		marginTop: window.height*0.10,
	},
	btnPlayOrStop: {
		marginBottom: window.width*0.02,
		width: window.width*0.07,
		height: window.height*0.12,
	},
	title: {
		marginBottom: window.width*0.02,
		height: window.height*0.10,
		width: window.height*0.50,
	},
	titleGameover: {
		marginTop: 40,
		height: window.height*0.13,
		width: window.width*0.4,
	},
	stars: {
		width: window.width*0.41,
		height: window.height*0.25,
	},
	label: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 30,
	},
	containerDropInstruments: {
		height:  window.height*0.28,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: window.height*0.01,
	},
	dropZone: {
		borderRadius: (window.height*0.28)/2,
		borderWidth: 3,
		borderStyle: 'dashed',
		borderColor: '#724212',
		backgroundColor: '#ffffff',
		height: window.height*0.28,
		width: window.height*0.28,
		margin: 15,
	},
	containerIntruments: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerImagesIntruments: {
		flexDirection: 'row',
		height: window.height*0.15,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: window.height*0.15,
	},
	instrument: {
		width: window.width*0.10,
		height: window.height*0.17,
		marginLeft: window.width*0.020,
		marginRight: window.width*0.020,
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#fff',
		fontSize: window.fontScale*35,
		margin:  window.width*0.010,
		justifyContent: 'center',
		alignItems: 'center',
	},
	touchable: {
		justifyContent: 'center',
		alignItems: 'center',
	}
};