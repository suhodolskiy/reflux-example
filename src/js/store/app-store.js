var	Reflux = require('reflux'),
	Actions = require('../actions/app-actions.js');

// Create store with tasks
var tasks = [
	{value: "Publishing a Project on GitHub", done: false},
	{value: "Write readme.md.", done: true},
	{value: "Add the ability to remove tasks.", done: true},
	{value: "Add the ability to mark tasks as completed and undo completed.", done: true},
	{value: "Start writing an example React and Reflux todo app.", done: true}
];

// Create a data store
// 
var Store = Reflux.createStore({
	// We listen to all actions
	// Our Actions
	listenables: Actions,

	getInitialState: function() {
		return {tasks: tasks}
	},
	onAddTask: function(value){
		// Add one task to the beginning of an array
		tasks.unshift({value: value, done: false});
		// Pass the data on to listeners
		this.trigger(tasks);
	},
	onCheckTask: function(id){
		// Invert value
		tasks[id].done = !tasks[id].done;
		// Pass the data on to listeners
		this.trigger(tasks);
	},
	onRemoveTask: function(i){
		// Remove task
		tasks.splice(i, 1);
		// Pass the data on to listeners
		this.trigger(tasks);
	}
});

module.exports = Store;
