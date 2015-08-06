'use strict';

var SearchBox1 = React.createClass({
  render: function() {
    return (
      <div className="search-page1">
        <SearchLogo />
        <SearchBar />   
        <Container />  
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

var Container = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center">
          
        </div> 
      </div>    
    );
  }
});

React.render(
  <SearchBox1 />,
  document.getElementById('content1')
);