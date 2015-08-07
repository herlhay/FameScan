'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    return (
       React.createElement("div", {className: "homepage"}
        
      )
    );
  }
});


React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);