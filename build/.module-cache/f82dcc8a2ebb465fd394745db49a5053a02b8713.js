'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement(SearchBar1, null), 
        React.createElement(SearchBar2, null), 
        React.createElement(CommentForm, null), 
        React.createElement(Comment, null)
      )
    );
  }
});

var SearchBar1 = React.createClass({displayName: "SearchBar1",
  render: function() {
    return (
    React.createElement("input", {type: "text", value: "Type in someone"})     
    );
  }
});

var SearchBar2 = React.createClass({displayName: "SearchBar2",
  render: function() {
    return (
    React.createElement("input", {type: "text", value: "Type in someone"})     
    );
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