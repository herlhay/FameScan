'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchLogo, null), 
        React.createElement(SearchBar, null)
      )
    );
  }
});