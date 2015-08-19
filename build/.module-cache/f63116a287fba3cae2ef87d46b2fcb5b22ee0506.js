'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    return (
       React.createElement("div", {className: "homepage"}
        
      )
    );
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    return (
      React.createElement("div", {className: "row fall-reveal"}, 
        React.createElement("div", {className: "twelve columns center"}, 
          React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
        )
      )
    );
  }
});

React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);