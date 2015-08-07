'use strict';

var Search = React.createClass({displayName: "Search",
  render: function() {
    return (
      React.createElement("div", {className: "search"}, 
        "hello"
      )
    );
  }
});

React.render(
  React.createElement(Search, null),
  document.getElementById('searchapp')
);