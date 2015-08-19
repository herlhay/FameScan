'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    return (
       React.createElement("div", {className: "homepage"}, 
        "hello"
      )
    );
  }
});


React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);