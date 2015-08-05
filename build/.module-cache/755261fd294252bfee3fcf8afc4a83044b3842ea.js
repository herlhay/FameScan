'use strict';

var React = require('react');

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    var message =
      'React has been successfully running for seconds.';

    return React.createElement("p", null, message);
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);