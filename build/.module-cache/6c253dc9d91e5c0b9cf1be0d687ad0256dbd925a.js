'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    var exone = {};
    var extwo = {};

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement(SearchBoxOne, null), 
          React.createElement(Logovs, null), 
          React.createElement(SearchBoxTwo, null)
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement(ResultBoxOne, {data: exone}), 
          React.createElement(Logovs, null), 
          React.createElement(ResultBoxTwo, {data: extwo})
        )
      )
    );
  }
});

var SearchBoxOne = React.createClass({displayName: "SearchBoxOne",
  render: function() {
    return (
        React.createElement("div", {className: "five columns"}, 
          React.createElement("input", {className: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
        )
    );
  }
});

var SearchBoxTwo = React.createClass({displayName: "SearchBoxTwo",
  render: function() {
    return (
      React.createElement("div", {className: "five columns"}, 
        React.createElement("input", {className: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
      )
    );
  }
});

var Logovs = React.createClass({displayName: "Logovs",
  render: function() {
    return (
      React.createElement("div", {className: "two columns center"}, 
        React.createElement("img", {width: "40"})
      )
    );
  }
  //src="./images/vs-icon@2x.pngs"
});

var ResultBoxOne = React.createClass({displayName: "ResultBoxOne",
  render: function() {
    return (
        React.createElement(SearchResult, {data: this.props.data})
    );
  }
});

var ResultBoxTwo = React.createClass({displayName: "ResultBoxTwo",
  render: function() {
    return (
        React.createElement(SearchResult, {data: this.props.data})
    );
  }
});

var SearchResult = React.createClass({displayName: "SearchResult",
  render: function() {
    return (
      React.createElement("div", {className: "five columns center"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("img", {className: "avatar", src: ''+this.props.data.avatarurl+'', width: "100"})
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("h2", {className: "title"}, this.props.data.name)
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("span", {className: "row-header"}, "Net worth:")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("span", {className: "row-header-content"}, this.props.data.networth)
          )
        ), 
        React.createElement("div", {className: "row top-padding"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("button", {className: "btn-nkd"}, "view")
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);