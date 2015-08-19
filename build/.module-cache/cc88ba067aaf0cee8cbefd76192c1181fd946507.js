'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    var message =
      'React has been successfullsy running for seconds.';

    return React.createElement("p", {className: "box"}, message);
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);