'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchBar1, {Logo1: true, SearchBar2: true})
      )
    );
  }
});

var SearchBar1 = React.createClass({displayName: "SearchBar1",
  render: function() {
    return (
        React.createElement("div", {className: "four.columns "}, 
          React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"})
        )   
    );
  }
});

var Logo1 = React.createClass({displayName: "Logo1",
  render: function() {
    return (
        React.createElement("div", {className: "four.columns "}, 
          React.createElement("img", {width: "30", src: "./images/Fastscan-logo@2x.png"})
        )
    );
  }
});


var SearchBar2 = React.createClass({displayName: "SearchBar2",
  render: function() {
    return (
      React.createElement("div", {className: "four.columns "}, 
        React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"})
      )      
    );
  }
});




React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);