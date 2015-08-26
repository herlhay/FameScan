'use strict';

var Searchesapp = React.createClass({displayName: "Searchesapp",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement(SearchBoxOne, null), 
        React.createElement(Logovs, null), 
        React.createElement(SearchBoxTwo, null)
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



var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

React.render(
  React.createElement(Searchesapp, null),
  document.getElementById('search-app')
);