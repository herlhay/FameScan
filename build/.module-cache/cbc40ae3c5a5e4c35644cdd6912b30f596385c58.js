'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    return (
      React.createElement("div", {className: "homepage"}, 
        React.createElement(Logo, null), 
        React.createElement(Caption, null), 
        React.createElement(Luxuries, null), 
        React.createElement(Cta, null)
      )
    );
  }
});