'use strict';

var SearchBox = React.createClass({
  render: function() {
    return (
      <div className="search-page">
        <SearchLogo />
        <SearchBar />
        <Caption/>
        <Luxuries/>        
      </div>
    );
  }
});

var SearchLogo = React.createClass({
  render: function() {
    return (
     <div className="row">
      <div className="site-logo">
        <img width="20" src="./images/Fastscan-logo@2x.png"/>
      </div>
    </div>   
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center">
          <div className="search-section">
           <input className="searchbar-edit" type="text" value="Type in someone"/>   
           <img width="30" src="./images/doubleF.png"/>
           <input className="searchbar-edit" type="text" value="Type in someone"/>  
          </div> 
        </div> 
      </div>    
    );
  }
});

var Caption = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center caption">
          Check who’s richer ?
        </div>
      </div>
    );
  }
});

var Luxuries = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center">
          <img width="150" src="./images/luxuries@2x.png"/>
        </div>
      </div>
    );
  }
});

// React.render(
//   <SearchBox />,
//   document.getElementById('content')
// );