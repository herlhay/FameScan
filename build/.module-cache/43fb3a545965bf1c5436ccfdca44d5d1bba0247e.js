'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchBar1, null), 
        React.createElement(SearchBar2, null)
      )
    );
  }
});

var SearchBar1 = React.createClass({displayName: "SearchBar1",
  render: function() {
    return (
    React.createElement("input", {type: "text", value: "Type in someone"})     
    );
  }
});

var SearchBar2 = React.createClass({displayName: "SearchBar2",
  render: function() {
    return (
    React.createElement("input", {type: "text", value: "Type in someone"})     
    );
  }
});




React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);