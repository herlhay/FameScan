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

var firstSearchBox = React.createClass({displayName: "firstSearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search"}, 
        "hello"
      )
    );
  }
});

/*
React.render(
  <Search/>,
  document.getElementById('searchapp')
);*/