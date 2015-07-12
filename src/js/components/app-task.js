var React = require('react'),
	Actions = require('../actions/app-actions.js');

var Task = React.createClass({
	// Add a handler 
	// to check the task
	handlerCheckTask: function(){
		Actions.checkTask(this.props.id);
	},
	// Add a handler 
	// to remove the task
	handlerRemoveTask: function(){
		Actions.removeTask(this.props.id);
	},
	render: function() {
		return (
			<li className={'list__task list__task--'+this.props.task.done}>
				{this.props.task.value}
				<a className="task__check" onClick={this.handlerCheckTask}></a>
				<a className="task__remove" onClick={this.handlerRemoveTask}></a>
			</li>
		);
	}
});

module.exports = Task;