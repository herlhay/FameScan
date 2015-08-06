'use strict';

var searchScreen = React.createClass({displayName: "searchScreen",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("inputOne", null), 
        React.createElement("vsLogo", null), 
        React.createElement("inputTwo", null)
      )
    );
  }
});

var inputOne = React.createClass({displayName: "inputOne",
  render: function() {
    return (	
		React.createElement("div", {className: "row"}, 
	        React.createElement("div", {className: "twelve.columns center"}, 
	          React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
	        )
	    )
    );
  }
});

var ProfileLink = React.createClass({displayName: "ProfileLink",
  render: function() {
    return (
      React.createElement("a", {href: 'https://www.facebook.com/' + this.props.username}, 
        this.props.username
      )
    );
  }
});

React.render(
  React.createElement("searchScreen", null),
  document.getElementById('example')
);