'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",

  fetch: function(isFirstSearchBar) {
    var item; 
    if (isFirstSearchBar) {
        item = {name: 'Ciara', networth: '$52,000,000', avatarurl: "http://thatgrapejuice.net/wp-content/uploads/2014/01/ciara-album-2014-thatgrapejuice.jpg"};
    } else {
      item = {name: 'Kanye West', networth: '$79,000,000', avatarurl: "http://ccdn.hiphopdx.com/2014/12/Kanye-West_12-03-2014-300x300.jpg"};
    }

    return item;
  },
  handleUserInput: function(filterText, isFirstSearchBar) {

    if (isFirstSearchBar) {
      this.setState({
          filterText: filterText,
          exone: this.fetch(true),
      });
    } else {
      this.setState({
          filterText: filterText,
          extwo: this.fetch(false),
      });
    }
  },
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "five columns"}, 
          React.createElement(SearchBoxOne, null)
        ), 
        React.createElement("div", {className: "two columns"}, 
          React.createElement(Logovs, null)
        ), 
        React.createElement("div", {className: "five columns"}, 
          React.createElement(SearchBoxTwo, null)
        )
      )
    );
  }
});

var SearchBoxOne = React.createClass({displayName: "SearchBoxOne",
  getInitialState: function() {
    return {
        filterText: '',
        data: {name: 'Young Thug', networth: '$3,000,000', avatarurl: "http://i.ytimg.com/vi/IreNZ1nnHcA/maxresdefault.jpg"}
    };
  },
  handleChange: function(filterText) {
    console.log(filterText);
  },
  render: function() {
    return (
      React.createElement("div", {class: "five columns"}, 
        React.createElement(GenericSearchBox, {onUserInput: this.handleChange}), 
        React.createElement(SearchResult, {data: this.state.data})
      )
    );
  }
});

var SearchBoxTwo = React.createClass({displayName: "SearchBoxTwo",
  getInitialState: function() {
    return {
        filterText: '',
        data: {name: 'Britney Spears', networth: '$189,000,000', avatarurl: "http://24.media.tumblr.com/tumblr_m26pmwNLCo1qc9f21o1_500.jpg"}
    };
  },
  handleChange: function(filterText) {
    console.log(filterText);
  },
  render: function() {
    return (
      React.createElement("div", {class: "five columns"}, 
        React.createElement(GenericSearchBox, {onUserInput: this.handleChange}), 
        React.createElement(SearchResult, {data: this.state.data})
      )
    );
  }
});

var GenericSearchBox = React.createClass({displayName: "GenericSearchBox",
  onUserInput: function() {
    this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
  },
  render: function() {
    return (
      React.createElement("div", {class: "row"}, 
        React.createElement("div", {class: "twelve columns"}, 
          React.createElement("search", {className: "search-input", onChange: this.onUserInput, ref: "filterTextInput", spellCheck: "false", autoComplete: "off", autoCorrect: "off", placeholder: "Search for someone", type: "text"})
        )
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
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns center"}, 
            React.createElement("img", {className: "avatar center", src: ''+this.props.data.avatarurl+'', width: "100"})
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns"}, 
            React.createElement("h2", {className: "title center"}, this.props.data.name)
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns center"}, 
            React.createElement("span", {className: "row-header"}, "Net worth:")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "twelve columns center"}, 
            React.createElement("span", {className: "row-header-content"}, this.props.data.networth)
          )
        ), 
        React.createElement("div", {className: "row top-padding"}, 
          React.createElement("div", {className: "twelve columns center"}, 
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