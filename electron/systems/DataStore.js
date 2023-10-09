const Store = require('electron-store');

const schema = {
	currentUser : {
		type : 'object'
	},
}
module.exports = new Store({schema});
