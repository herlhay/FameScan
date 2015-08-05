'use strict';

var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="search-page">
        <SearchBar1 />
        <vsLogo />
        <SearchBar2 />
      </div>
    );
  }
});

var SearchBar1 = React.createClass({
  render: function() {
    return (
    <input type="text" value="Type in someone"/>     
    );
  }
});

var vsLogo = React.createClass({
  render: function() {
    return (
      <img width="50" src="./images/Fastscan-logo@2x.png"/>
    );
  }
});


var SearchBar2 = React.createClass({
  render: function() {
    return (
    <input type="text" value="Type in someone"/>     
    );
  }
});




React.render(
  <SearchBox />,
  document.getElementById('content')
);