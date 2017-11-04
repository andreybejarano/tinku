export default {
	cumbia: {
		name: 'cumbia',
		title: require('../statics/images/cumbiaTitulo.png'),
		background: require('../statics/images/fondoCumbia.png'),
		backgroudGameover: require('../statics/images/fondoCumbiaFin.png'),
		music: 'cumbia.mp3',
		instruments: [
			{
				name: 'Maracas',
				valid: true,
				img: require('../statics/images/instrumentos/maracas.png'),
				music: 'maracas.mp3'
			},
			{
				name: 'Tambora',
				valid: true,
				img: require('../statics/images/instrumentos/tambora.png'),
				music: 'tambora.mp3'
			},
			{
				name: 'Gaita',
				valid: true,
				img: require('../statics/images/instrumentos/gaita.png'),
				music: 'gaita.mp3'
			},
			{
				name: 'Arpa',
				valid: false,
				img: require('../statics/images/instrumentos/arpa.png'),
				music: 'arpa.mp3'
			},
			{
				name: 'Barimbao',
				valid: false,
				img: require('../statics/images/instrumentos/barimbaru.png'),
				music: 'birimbao.mp3'
			}
		]
	},
	huaino: {
		name: 'huaino',
		title: require('../statics/images/huainoTitulo.png'),
		background: require('../statics/images/fondoHuaino.png'),
		backgroudGameover: require('../statics/images/fondoHuainoFin.png'),
		music: 'huaino.mp3',
		instruments: [
			{
				name: 'Sikus',
				valid: true,
				img: require('../statics/images/instrumentos/sikus.png'),
				music: 'sikus.mp3'
			},
			{
				name: 'Charango',
				valid: true,
				img: require('../statics/images/instrumentos/charango.png'),
				music: 'charango.mp3'
			},
			{
				name: 'Bombo',
				valid: true,
				img: require('../statics/images/instrumentos/bombo.png'),
				music: 'bombo.mp3'
			},
			{
				name: 'Guiro',
				valid: false,
				img: require('../statics/images/instrumentos/guiro.png'),
				music: 'guiro.mp3'
			},
			{
				name: 'Agogo',
				valid: false,
				img: require('../statics/images/instrumentos/agogo.png'),
				music: 'agogo.mp3'
			}
		]
	},
	samba: {
		name: 'samba',
		title: require('../statics/images/sambaTitulo.png'),
		background: require('../statics/images/fondoSamba.png'),
		backgroudGameover: require('../statics/images/fondoSambaFin.png'),
		music: 'samba.mp3',
		instruments: [
			{
				name: 'Pandeiro',
				valid: true,
				img: require('../statics/images/instrumentos/pandeiro.png'),
				music: 'pandeiro.mp3'
			},
			{
				name: 'Tantan',
				valid: true,
				img: require('../statics/images/instrumentos/tantan.png'),
				music: 'tantan.mp3'
			},
			{
				name: 'Surdo',
				valid: true,
				img: require('../statics/images/instrumentos/surdo.png'),
				music: 'zurdo.mp3'
			},
			{
				name: 'Arpa',
				valid: false,
				img: require('../statics/images/instrumentos/arpa.png'),
				music: 'arpa.mp3'
			},
			{
				name: 'Barimbaru',
				valid: false,
				img: require('../statics/images/instrumentos/barimbaru.png'),
				music: 'birimbao.mp3'
			}
		]
	},
	tango: {
		name: 'tango',
		title: require('../statics/images/tangoTitulo.png'),
		background: require('../statics/images/fondoTango.png'),
		backgroudGameover: require('../statics/images/fondoTangoFin.png'),
		music: 'tango.mp3',
		instruments: [
			{
				name: 'Violín',
				valid: true,
				img: require('../statics/images/instrumentos/violin.png'),
				music: 'violin.mp3'
			},
			{
				name: 'Bandoneón',
				valid: true,
				img: require('../statics/images/instrumentos/bandoneon.png'),
				music: 'bandoneon.mp3'
			},
			{
				name: 'Piano',
				valid: true,
				img: require('../statics/images/instrumentos/piano.png'),
				music: 'piano.mp3'
			},
			{
				name: 'Sikus',
				valid: false,
				img: require('../statics/images/instrumentos/sikus.png'),
				music: 'sikus.mp3'
			},
			{
				name: 'Maracas',
				valid: false,
				img: require('../statics/images/instrumentos/maracas.png'),
				music: 'maracas.mp3'
			}
		]
	}
};
