'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",

  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "five columns"}, 
          React.createElement(SearchBoxOne, null)
        ), 
        React.createElement("div", {className: "two columns"}, 
          React.createElement(Logovs, null)
        ), 
        React.createElement("div", {className: "five columns"}, 
          React.createElement(SearchBoxTwo, null)
        )
      )
    );
  }
});

React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);