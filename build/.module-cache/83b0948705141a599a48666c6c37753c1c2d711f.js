'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement("siteLogo", null), 
        React.createElement(SearchBar, null)
      )
    );
  }
});


React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);