'use strict';

var Search = React.createClass({displayName: "Search",
  render: function() {
    return (
      React.createElement("div", {className: "search"}, 
        React.createElement(Logo, null), 
        React.createElement(Caption, null), 
        React.createElement(Luxuries, null), 
        React.createElement(Cta, null)
      )
    );
  }
});