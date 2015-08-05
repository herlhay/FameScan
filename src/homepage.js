'use strict';

var Homescreen = React.createClass({
  render: function() {
    return (
      <div className='homepage'>
        <Logo/>
        <Caption/>
        <Luxuries/>
        <Cta/>
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
        <div className="twelve.columns center">
          <img width="150" src="./images/luxuries@2x.png"/>
        </div>
      </div>
    );
  }
});

var Cta = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="twelve.columns center">
          <button className="btn cta-primary"> try it now</button>
        </div>
      </div>
    );
  }
});


React.render(
  <Homescreen/>,
  document.getElementById('container')
);