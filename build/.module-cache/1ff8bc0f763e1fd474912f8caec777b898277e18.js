'use strict';

var Searchscreen = React.createClass({displayName: "Searchscreen",
  render: function() {
    return (
      React.createElement("div", {className: "homepage"}, 
        React.createElement("inputOne", null), 
        React.createElement("vsLogo", null), 
        React.createElement("inputTwo", null), 
        React.createElement("ipalibo", null)
      )
    );
  }
});

var inputOne = React.createClass({displayName: "inputOne",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
       		React.createElement("input", {type: "text", value: "Type in someone"})	
        )
      )
    );
  }
});

var vsLogo = React.createClass({displayName: "vsLogo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center caption"}, 
          "Check who’s richer ?"
        )
      )
    );
  }
});

var inputTwo = React.createClass({displayName: "inputTwo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          React.createElement("input", {type: "text", value: "Type in someone"})
        )
      )
    );
  }
});

var ipalibo = React.createClass({displayName: "ipalibo",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          React.createElement("input", {type: "text", value: "Type in someone"})
        )
      )
    );
  }
});


// React.render(
//   <Searchscreen/>,
//   document.getElementById('searchbar')
// );