'use strict';

var SearchBox1 = React.createClass({displayName: "SearchBox1",
  render: function() {
    return (
      React.createElement("div", {className: "search-page1"}, 
        React.createElement(SearchLogo, null), 
        React.createElement(SearchBar, null), 
        "// ", React.createElement(ImageContainer1, null), 
        "// ", React.createElement(ImageContainer2, null)
      )
    );
  }
});

var SearchLogo = React.createClass({displayName: "SearchLogo",
  render: function() {
    return (
     React.createElement("div", {className: "row"}, 
      React.createElement("div", {className: "site-logo"}, 
        React.createElement("img", {width: "20", src: "./images/Fastscan-logo@2x.png"})
      )
    )   
    );
  }
});

var SearchBar = React.createClass({displayName: "SearchBar",
  render: function() {
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve.columns center"}, 
          React.createElement("div", {className: "search-section"}, 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"}), 
           React.createElement("img", {width: "30", src: "./images/doubleF.png"}), 
           React.createElement("input", {className: "searchbar-edit", type: "text", value: "Type in someone"})
          )
        )
      )    
    );
  }
});

// var ImageContainer1 = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <div className="twelve.columns center">
//           yahoo
//         </div> 
//       </div>    
//     );
//   }
// });

// var ImageContainer1 = React.createClass({
//   render: function() {
//     return (
//       <div className="row">
//         <div className="twelve.columns center">
//           hagsgs
//         </div> 
//       </div>    
//     );
//   }
// });

React.render(
  React.createElement(SearchBox1, null),
  document.getElementById('content1')
);