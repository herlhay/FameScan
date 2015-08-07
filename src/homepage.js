'use strict';

var Homescreen = React.createClass({
  handleClick: function() {
    this.setState({ shouldHide: true });
    this.props.handleClick();
  },
  render: function() {
    return (
      <div className='homepage'>
        <Logo/>
        <Caption/>
        <Luxuries/>
        <Cta handleClick = {this.handleClick}/>
      </div>
    );
  }
});

var Logo = React.createClass({
  render: function() {
    return (
      <div className="row ">
        <div className="twelve columns center">
          <img width="50" src="./images/Fastscan-logo@2x.png"/>
        </div>
      </div>
    );
  }
});

var Caption = React.createClass({
  render: function() {
    return (
      <div className="row fall-reveal">
        <div className="twelve columns center caption">
          Check who’s richer ?
        </div>
      </div>
    );
  }
});

var Luxuries = React.createClass({
  render: function() {
    return (
      <div className="row ">
        <div className="twelve columns center">
          <img width="150" src="./images/luxuries@2x.png"/>
        </div>
      </div>
    );
  }
});

var Cta = React.createClass({
    getInitialState: function() {
        return { shouldHide: false };
    },
    onClick: function() {
        $('.twelve.columns.center').addClass("fall-dismiss");
        $('.fall-dismiss').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function() {
            this.setState({ shouldHide: true });
            this.props.handleClick();
        }.bind(this));
    },

  render: function() {
    return (
      !this.state.shouldHide ?
      <div className="row">
        <div className="twelve columns center fall-reveal">
          <button onClick={this.onClick} className="btn cta-primary"> try it now</button>
        </div>
      </div> : false
      /*
      <div className="row fall-dismiss">
        <div className="twelve columns center">
          <button onClick={this.onClick} className="btn cta-primary"> try it now</button>
        </div>
      </div>*/
    );
  }
});

/*
React.render(
  <Homescreen/>,
  document.getElementById('homepagesplash')
);*/