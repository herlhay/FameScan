var InstantBox = React.createClass({displayName: "InstantBox",
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
                React.createElement(DisplayTable, {data: this.state.filteredData})
            );
        }
    },
        
    render:function(){
        return (
            React.createElement("div", {className: "InstantBox"}, 
                React.createElement("h2", null, "Who is Richer?"), 
                React.createElement(SearchBox, {query: this.state.query, doSearch: this.doSearch}), 
                React.createElement(DisplayTable, {data: this.state.filteredData})
            )
        );
    }
});

var SearchBox = React.createClass({displayName: "SearchBox",
    doSearch:function(){
        var query=this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    },
    render:function(){
        return React.createElement("input", {className: "searchbar-edit", type: "text", ref: "searchInput", placeholder: "Search Name", value: this.props.query, onChange: this.doSearch})
    }
});

var DisplayTable = React.createClass({displayName: "DisplayTable",
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
        rows.push(React.createElement("tr", null, React.createElement("td", null, person.image)))
        rows.push(React.createElement("tr", null, React.createElement("td", null, person.name)))
        });        
        //returning the table
        return(
             React.createElement("table", null, 
                React.createElement("tbody", null, rows)
            )
        );
    }
});

var tableData=[
{
    name:'Paul mak',
    image: React.createElement("img", {width: "50", src: "./images/profile_img.png"}),
},
];

var dataSource=[
{
    name:'Paul mak',
    image: React.createElement("img", {width: "50", src: "./images/profile_img.png"}),
},
{
    name:'John Doe',
    image : '002'
},
{
    name:'Sachin Tendulkar',
    image : '003'
}];


React.render(
  React.createElement(InstantBox, {data: dataSource}),
  document.getElementById('content1')
);