'use strict';

var Homescreen = React.createClass({
  render: function() {
    var message =
      'React has been successfully running for seconds.';

    return <p className='box'>{message}</p>;
  }
});

React.render(
  <Homescreen/>,
  document.getElementById('container')
);