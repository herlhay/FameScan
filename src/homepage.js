'use strict';

var Homescreen = React.createClass({
  render: function() {
    return (
      <div className='homepage'>
        <Logo/>
        <Caption/>
        <Luxuries/>
      </div>
    );
  }
});

var Logo = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center">
          <img width="50" src="./images/Fastscan-logo@2x.png"/>
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
        <div className="twelve.columns center caption">
          <img width="150" src="./images/luxuries@2x.png"/>
        </div>
      </div>
    );
  }
});



React.render(
  <Homescreen/>,
  document.getElementById('container')
);