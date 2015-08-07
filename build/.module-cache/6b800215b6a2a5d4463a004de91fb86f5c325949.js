'use strict';

var App = React.createClass({displayName: "App",

  render: function() {
    return (
    	React.createElement(Homescreen, null)
    );
  }
});

React.render(
  React.createElement(App, null),
  document.getElementById('app')
);