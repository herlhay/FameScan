
import React from 'react'
import Search from 'react-search'
 
var TestComponent = React.createClass({
 
  myFunc:function(e) {
    console.log(e.target.value);
  },

  render: function() {
    return (
      <Search items={this.props.items} onChange={this.myFunc} />
    );
  }
});
 
var ITEMS = ['ruby', 'javascript', 'lua', 'go', 'c++', 'julia', 
'java', 'c', 'scala','haskell']

React.render(<TestComponent items={ITEMS} />,
document.getElementById('content1'))
 