'use strict';

var Search = React.createClass({displayName: "Search",
  render: function() {
    return (
      React.createElement("firstSearchBox", null)
    );
  }
});

React.render(
  React.createElement(Search, null),
  document.getElementById('search-app')
);