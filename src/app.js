'use strict';

var App = React.createClass({

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

		return (
			this.state.showWelcome?<Homescreen handleClick = {this.handleTryNowClick}/>:<Searchesapp/>
		);
	}
});

React.render(
  <App/>,
  document.getElementById('search-app')
);