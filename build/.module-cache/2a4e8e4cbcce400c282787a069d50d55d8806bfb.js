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

var SearchLogo = React.createClass({displayName: "SearchLogo",
  render: function() {
    return (
     React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "site-logo"}, 
        React.createElement("img", {width: "20", src: "./images/Fastscan-logo@2x.png"})
      )
    )   
    );
  }
});

var SearchBar = React.createClass({displayName: "SearchBar",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          React.createElement("div", {className: "search-section"}, 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"}), 
           React.createElement("img", {width: "30", src: "./images/doubleF.png"}), 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"})
          )
        )
      )    
    );
  }
});

React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);