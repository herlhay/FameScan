'use strict';

var SearchBox = React.createClass({displayName: "SearchBox",
  render: function() {
    return (
      React.createElement("div", {className: "search-page"}, 
        React.createElement("sitelogo", null), 
        React.createElement(SearchBar1, null)
      )
    );
  }
});

var sitelogo = React.createClass({displayName: "sitelogo",
  render: function() {
    return (
        React.createElement("img", {width: "30", src: "./images/Fastscan-logo@2x.png"})
    );
  }
});

// var SearchBar1 = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <div className="twelve.columns ">
//            <input className="searchbar-edit" type="text" value="Type in someone"/>   
//            <img width="30" src="./images/Fastscan-logo@2x.png"/>
//            <input className="searchbar-edit" type="text" value="Type in someone"/>  
//         </div> 
//       </div>    
//     );
//   }
// });

React.render(
  React.createElement(SearchBox, null),
  document.getElementById('content')
);