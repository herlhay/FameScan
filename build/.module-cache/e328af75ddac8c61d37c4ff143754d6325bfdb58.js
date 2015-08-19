'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  getInitialState: function() {
    return {
        filterText: ''
    };
  },
  handleUserInput: function(filterText) {
    this.setState({
        filterText: filterText
    });
  },
  render: function() {
    var exone = {name: 'Kanye West', networth: '$79,000,000', avatarurl: "http://ccdn.hiphopdx.com/2014/12/Kanye-West_12-03-2014-300x300.jpg"};
    var extwo = {name: 'Britney Spears', networth: '$189,000,000', avatarurl: "http://24.media.tumblr.com/tumblr_m26pmwNLCo1qc9f21o1_500.jpg"};

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement(SearchBoxOne, {onUserInput: this.handleUserInput}), 
          React.createElement(Logovs, null), 
          React.createElement(SearchBoxTwo, {onUserInput: this.handleUserInput})
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
  handleChange: function() {
    this.props.handleUserInput(this.refs.filter-text-input-one.getDOMNode().value);
  },
  render: function() {
    return (
        React.createElement("div", {className: "five columns"}, 
          React.createElement("input", {onChange: this.handleChange, ref: "filter-text-input-one", className: "search-input", spellcheck: "false", autocomplete: "off", autocorrect: "off", placeholder: "Search for someone", type: "text"})
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