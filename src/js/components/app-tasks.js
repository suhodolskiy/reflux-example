var React = require('react'),
	Reflux = require('reflux'),
	Store = require('../store/app-store.js'),
	Task = require('./app-task.js');

var Tasks = React.createClass({
	// This will cause setState({task:tasks}) whenever the store does trigger
	mixins: [ Reflux.connect(Store) ],
	getCompletedLength: function(){
		// Get the number of completed tasks
		return this.state.tasks.filter(function(item){return item.done}).length;
	},
	calculatePercent: function(){
		// Get a percentage of completed tasks from the total number of tasks
		return Math.round(100 / this.state.tasks.length * this.getCompletedLength());
	},
	render: function(){
		// Render all task './app-task.js'
		var tasks = this.state.tasks.map(function(task, i){ return <Task key={i} id={i} task={task}/>});

		// Translate in line store and display
		var strTasks = JSON.stringify(this.state.tasks);

		return (
			<section className="app-todo__tasks tasks">
				<h2 className="tasks__title">
					Tasks
					<small>
						{' — '+this.getCompletedLength()+' / '+this.state.tasks.length+' ('+this.calculatePercent()+'%)'}
					</small>
				</h2>
				<ul className="tasks__list">
					{tasks}
				</ul>
				<div className="tasks__json-store">
					{strTasks}
				</div>
			</section>
		);
	}
});
module.exports = Tasks;