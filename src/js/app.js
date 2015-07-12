var React = require('react'),
	Tasks = require('./components/app-tasks.js'),
	Form = require('./components/app-form.js');

// Renders the full application
var App = React.createClass({ 
		render: function(){
			return (
				<div className="app-todo"> 
					<Tasks/>
					<Form/>
				</div>	
			)
		}
});

React.render(<App/>, document.getElementById('content'));