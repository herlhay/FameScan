'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",

  getInitialState: function() {
  	return { clicked: 'true' };

  },

  handleClick: function() {
    this.setState({clicked: !this.state.liked});

  },

  render: function() {
  	return (
      <p>
        You.
      </p>

    );
  }

});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);