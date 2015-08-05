'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    return (
      React.createElement("div", {className: "homepage"}, message)
    );
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          "Logo!"
        )
      )
    );
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);