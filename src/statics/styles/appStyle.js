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
		padding: '5%',
		height: '100%',
		width: '100%',
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
	title: {
		height: 60,
		width: 300,
	},
	titleGameover: {
		height: 100,
		width: 500,
	},
	label: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 30,
	},
	containerDropInstruments: {
		height: 220,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
	},
	dropZone: {
		borderRadius: 110,
		borderWidth: 3,
		borderStyle: 'dashed',
		borderColor: '#724212',
		backgroundColor: '#ffffff',
		height: 220,
		width: 220,
		margin: 15,
	},
	containerIntruments: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerImagesIntruments: {
		flexDirection: 'row',
		width: 220,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
	},
	instrument: {
		marginLeft: 25,
		marginRight: 25,
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#fff',
		fontSize: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	touchable: {
		justifyContent: 'center',
		alignItems: 'center',
	}
};