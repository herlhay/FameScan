'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
       React.createElement(BoxOne, null), 
       React.createElement(BoxTwo, null), 
       React.createElement("vsLogo", null)
      )
    );
  }
});

var BoxOne = React.createClass({displayName: "BoxOne",
  render: function() {
    return (
      
        React.createElement("div", {className: "five columns"}, 
          React.createElement("input", {className: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
        )
    );
  }
});

var vsLogo = React.createClass({displayName: "vsLogo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "five columns"}, 
          React.createElement("input", {className: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
        )
      )
    );
  }
});

var BoxTwo = React.createClass({displayName: "BoxTwo",
  render: function() {
    return (
      React.createElement("div", {class: "five columns"}, 
        React.createElement("input", {class: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
      )
    );
  }
});

React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);