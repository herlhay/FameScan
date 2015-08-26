'use strict';

var Searchesapp = React.createClass({

  render: function() {
    return (
      <div className="row zoom-in">
        <div className="five columns">
          <SearchBoxOne />
        </div>
        <div className="two columns">
          <Logovs/>
        </div>
        <div className="five columns">
          <SearchBoxTwo />
        </div>
      </div>
    );
  }
});

var SearchBoxOne = React.createClass({
  getInitialState: function() {
    return {
        filterText: '',
        data: {name: 'Young Thug', networth: '$3,000,000', avatarurl: "http://i.ytimg.com/vi/IreNZ1nnHcA/maxresdefault.jpg"}
    };
  },
  componentDidMount: function() {

  },
  handleChange: function(filterText) {
    retrieveContent(filterText, function(result){
      this.setState({
        filterText: filterText,
        data: {name: result[0]["artist-name"], networth: result[0]["artist-net-worth"], avatarurl: result[0]["artist-url"]}
      });
    }.bind(this));
  },
  render: function() {
    return (
      <div className="twelve columns">
        <GenericSearchBox onUserInput={this.handleChange}/>
        {this.state.filterText ?<SearchResult data={this.state.data}/>:<div className="result-content seperator center"><Luxuries/></div>}
      </div>
    );
  }
});

var SearchBoxTwo = React.createClass({

  getInitialState: function() {
    return {
        filterText: '',
        data: {name: 'Britney Spears', networth: '$189,000,000', avatarurl: "http://24.media.tumblr.com/tumblr_m26pmwNLCo1qc9f21o1_500.jpg"}
    };
  },

  handleChange: function(filterText) {
    retrieveContent(filterText, function(result){
      this.setState({
        filterText: filterText,
        data: {name: result[0]["artist-name"], networth: result[0]["artist-net-worth"], avatarurl: result[0]["artist-url"]}
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="twelve columns">
        <GenericSearchBox onUserInput={this.handleChange}/>
        {this.state.filterText ? <SearchResult data={this.state.data}/>:<div className="result-content seperator"><Luxuries/></div>}
      </div>
    );
  }
});

var GenericSearchBox = React.createClass({

  onUserInput: function() {
    this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value);
  },

  render: function() {
    return (
      <div className="row">
        <div className="twelve columns">
          <input className="search-input" onChange={this.onUserInput} ref="filterTextInput" spellCheck="false" autoComplete="off" autoCorrect="off" placeholder="Search for someone" type="search"/>
        </div>
      </div>
    );
  }
});

var Logovs = React.createClass({
  render: function() {
    return (
      <div className="two columns center">
        <img width="40" />
      </div>
    );
  }
  //src="./images/vs-icon@2x.pngs"
});

var ResultBoxOne = React.createClass({
  render: function() {
    return (
        <SearchResult data={this.props.data}/>
    );
  }
});

var ResultBoxTwo = React.createClass({
  render: function() {
    return (
        <SearchResult data={this.props.data}/>
    );
  }
});

var SearchResult = React.createClass({
  render: function() {
    var divStyle = {
      backgroundImage: 'url(' + this.props.data.avatarurl + ')',
      width: 100,
      height: 100
    };
    return (
      <div className="result-content zoom-in">
        <div className="row">
          <div className="twelve columns center">
            <div className="avatar center" style={divStyle}>
              <span style={divStyle}></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <h2 className="title center">{this.props.data.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns center">
            <span className="row-header">Net worth:</span>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns center">
            <span className="row-header-content">{this.props.data.networth}</span>
          </div>
        </div>
        <div className="row top-padding">
          <div className="twelve columns center">
            <button className="btn-nkd">view</button>
          </div>
        </div>
      </div>
    );
  }
});

function retrieveContent(searchQuery, completionHandler) {
  var searchContent = [];

  $.get( "https://api.myjson.com/bins/2u39u", function( result ) {
    var resultLength = result["artists"].length;    
    for (var i = 0; i < resultLength; i++) {
      if ((result["artists"][i]["artist-name"].toLowerCase()).indexOf(searchQuery.toLowerCase()) != -1) {
        searchContent.push(result["artists"][i]);
      }
    }
    completionHandler(searchContent);
  });
}

/*
React.render(
  <Searchesapp/>,
  document.getElementById('search-app')
);
*/