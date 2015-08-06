'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchBar, null), 
        React.createElement(CommentForm, null), 
        React.createElement(Comment, null)
      )
    );
  }
});

var SearchBar = React.createClass({displayName: "SearchBar",
  render: function() {
    return (
	React.createElement("div", {className: "row"}, 
	    React.createElement("div", {className: "twelve.columns center"}, 
	      React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
	    )
    )    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
      )
    );
  }
});

React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);