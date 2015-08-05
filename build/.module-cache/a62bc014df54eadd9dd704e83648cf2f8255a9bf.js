'use strict';

var Avatar = React.createClass({displayName: "Avatar",
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

var ProfilePic = React.createClass({displayName: "ProfilePic",
  render: function() {
    return (
     	React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
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
  React.createElement(Avatar, {username: "pwh"}),
  document.getElementById('example')
);