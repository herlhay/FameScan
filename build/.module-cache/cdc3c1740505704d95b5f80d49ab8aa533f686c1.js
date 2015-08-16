'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(Logo1, null), 
        "// ", React.createElement(SearchBar, null)
      )
    );
  }
});

var Logo1 = React.createClass({displayName: "Logo1",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "six.columns center"}, 
          React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
        )
      )   
    );
  }
});

React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);