var Reflux = require('reflux');

var Actions = Reflux.createActions([
	// Сreate action
	'addTask',
	'checkTask',
	'removeTask'
]);
 
module.exports = Actions;