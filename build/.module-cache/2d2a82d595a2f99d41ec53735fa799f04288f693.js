'use strict';

var React = require('react');

var homescreen = React.createClass({displayName: "homescreen",
  render: function() {
    var message =
      'React has been successfully running for seconds.';

    return React.createElement("p", null, message);
  }
});

React.render(
  React.createElement(ExampleApplication, {elapsed: new Date().getTime() - start}),
  document.getElementById('container')
);