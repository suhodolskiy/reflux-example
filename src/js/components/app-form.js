var React = require('react'),
	Actions = require('../actions/app-actions.js');

var Form = React.createClass({
	getInitialState: function() {
		return {value: ''};
	},
	// Add a handler 
	// to edit value <input/>
	handleChange: function(e) {
		this.setState({value: e.target.value});
	},
	// Add a handler 
	// to new task
	handleAddTask: function(event){
		event.preventDefault();
		// Get DOM input
		var task = this.refs.task.getDOMNode();
		
		// Calidate value input
		if( task.value.trim() != ''){
			Actions.addTask(task.value);

			// Clear the input
			this.setState({value: ''});
		}
	},
	render: function() {
		return (
			<div className="app-todo__form">
				<div className="container">
					<form onSubmit={this.handleAddTask}>
						<input className="form__input" 
							   type="text" 
							   ref="task" 
							   placeholder="Write new task and hit Enter..." 
							   value={this.state.value}
							   onChange={this.handleChange}
						/>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Form;