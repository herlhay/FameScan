'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  render: function() {
    return (
      React.createElement("div", {className: "homepage"}, 
        React.createElement(Logo, null), 
        React.createElement(Caption, null)
      )
    );
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
        )
      )
    );
  }
});

var Caption = React.createClass({displayName: "Caption",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center caption"}, 
          "Check who’s richer ?"
        )
      )
    );
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);