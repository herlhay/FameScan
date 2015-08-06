'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchBar1, null)
      )
    );
  }
});

var SearchBar1 = React.createClass({displayName: "SearchBar1",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns "}, 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"}), 
           React.createElement("img", {width: "30", src: "./images/Fastscan-logo@2x.png"}), 
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