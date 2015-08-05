'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    var message =
      'React has been successfully running for seconds.';

    return React.createElement("p", {className: "box"}, message);
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);