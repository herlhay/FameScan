'use strict';

var App = React.createClass({displayName: "App",

	getInitialState: function() {
		return {
			showWelcome: true
		};
	},

	handleTryNowClick: function(){

		this.setState({
			showWelcome: false
		});
	},

	render: function() {
		var divStyle = {
		  color: 'white',
		  backgroundImage: 'url(' + imgUrl + ')',
		  WebkitTransition: 'all', // note the capital 'W' here
		  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		};
		return (
			this.state.showWelcome?React.createElement(Homescreen, {handleClick: this.handleTryNowClick}):React.createElement(Searchesapp, null)
		);
	}
});

React.render(
  React.createElement(App, null),
  document.getElementById('search-app')
);