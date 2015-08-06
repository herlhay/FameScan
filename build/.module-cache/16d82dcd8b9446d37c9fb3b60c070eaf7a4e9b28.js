'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement("mylogo", null), 
        React.createElement(SearchBar, null)
      )
    );
  }
});

var mylogo = React.createClass({displayName: "mylogo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns "}, 
        React.createElement("img", {width: "30", src: "./images/Fastscan-logo@2x.png"})
        )
      )  
    );
  }
});

var SearchBar = React.createClass({displayName: "SearchBar",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns "}, 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"}), 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"})
        )
      )    
    );
  }
});

React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);