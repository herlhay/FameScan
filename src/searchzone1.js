var InstantBox = React.createClass({
    doSearch:function(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        this.props.data.forEach(function(person){
            if(person.name.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(person);
        });

        this.setState({
            query:queryText,
            filteredData: queryResult
        })
    },
    getInitialState:function(){
        return{
            query:'',
            filteredData: undefined
        }
    },
    renderResults: function() {
        if (this.state.filteredData) {
            return (
                <DisplayTable data={this.state.filteredData}/>
            );
        }
    },
    render:function(){
        return (
            <div className="InstantBox">
                <h2>Who is Richer?</h2>
                <SearchBox query={this.state.query} doSearch={this.doSearch}/>
                {this.renderResults()}
            </div>
        );
    }
});

var SearchBox = React.createClass({
    doSearch:function(){
        var query=this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    },
    render:function(){
        return <input className="searchbar-edit" type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
    }
});

var DisplayTable = React.createClass({
      doSearch:function(queryText){
        console.log(queryText)
        //get query result
        var queryResult=[];
        this.props.data.forEach(function(person){
            if(person.name.toLowerCase().indexOf(queryText)!=-1)
            queryResult.push(person);
        });

        this.setState({
            query:queryText,
            filteredData: queryResult
        })
    },

    render:function(){
        //making the rows to display
        var rows=[];
        this.props.data.forEach(function(person) {
        rows.push(<tr><td>{person.image}</td></tr>)
        rows.push(<tr><td>{person.name}</td></tr>)
        });        
        //returning the table
        return(
             <table>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var dataSource=[
{
    name:'Ipalibo Whyte',
    image: <img width="150" src="./images/kanye-west1.jpg"/>,
},
{
    name:'Chinedu Abalogu',
    image : '002'
},
{
    name:'Aminu Shehu',
    image : '003'
}];


React.render(
  <InstantBox data={dataSource}/>,
  document.getElementById('content1')
);
