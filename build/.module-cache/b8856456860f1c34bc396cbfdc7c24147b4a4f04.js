'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",

  render: function() {
    var childwithColumns = React.createElement('div', { className: 'twelve.columns center' }, 'Text Content');
    var childwithRow = React.createElement('div', { className: 'row' }, childwithColumns);
    return React.createElement("div", {className: "homepage"}, childwithRow);

  }

});

var logo = React.createClass({displayName: "Homescreen",
  
  render: function() {
    var childwithColumns = React.createElement('div', { className: 'twelve.columns center' }, 'Text Content');
    var childwithRow = React.createElement('div', { className: 'row' }, childwithColumns);
    return React.createElement("div", {className: "homepage"}, childwithRow);
  }
});

React.render(
  React.createElement(Homescreen, null),
  document.getElementById('container')
);