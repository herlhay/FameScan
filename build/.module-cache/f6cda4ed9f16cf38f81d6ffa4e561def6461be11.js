'use strict';

var Homescreen = React.createClass({displayName: "Homescreen",
  handleClick: function() {
    this.setState({ shouldHide: true });
    this.props.handleClick();
  },
  render: function() {
    return (
      React.createElement("div", {className: "homepage"}, 
        React.createElement(Logo, null), 
        React.createElement(Caption, null), 
        React.createElement(Luxuries, null), 
        React.createElement(Cta, {handleClick: this.handleClick})
      )
    );
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    return (
      React.createElement("div", {className: "row fall-reveal"}, 
        React.createElement("div", {className: "twelve columns center"}, 
          React.createElement("img", {width: "50", src: "./images/Fastscan-logo@2x.png"})
        )
      )
    );
  }
});

var Caption = React.createClass({displayName: "Caption",
  render: function() {
    return (
      React.createElement("div", {className: "row fall-reveal"}, 
        React.createElement("div", {className: "twelve columns center caption"}, 
          "Check who’s richer ?"
        )
      )
    );
  }
});

var Luxuries = React.createClass({displayName: "Luxuries",
  render: function() {
    return (
      React.createElement("div", {className: "row fall-reveal"}, 
        React.createElement("div", {className: "twelve columns center"}, 
          React.createElement("img", {width: "150", src: "./images/luxuries@2x.png"})
        )
      )
    );
  }
});

var Cta = React.createClass({displayName: "Cta",
    getInitialState: function() {
        return { shouldHide: false };
    },
    onClick: function() {
        $('.twelve.columns.center').addClass("fall-dismiss");
        $('.fall-dismiss').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(event) {
            this.setState({ shouldHide: true });
            this.props.handleClick();
        }.bind(this));
    },

  render: function() {
    return (
      !this.state.shouldHide ?
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "twelve columns center fall-reveal"}, 
          React.createElement("button", {onClick: this.onClick, className: "btn cta-primary"}, " try it now")
        )
      ) : false
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