'use strict';

var App = React.createClass({displayName: "App",

	getInitialState: function() {
		return {
			showWelcome: true
		};
	},

	handleTryNowClick: function(){
		console.log("hello");
		/*
		this.setState({
			showWelcome: false
		});*/
	},

	render: function() {
		return (
			this.state.showWelcome?React.createElement(Homescreen, null):React.createElement(Searchesapp, null)
		);
	}
});

React.render(
  React.createElement(App, null),
  document.getElementById('app')
);