var App = () => (
  <ul>
    <h2>Grocery List</h2>
    <GroceryList groceries={['Cucumbers', 'Kale', 'Sugar', 'Eggs', 'Cheese']}/>
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      // textDecoration: this.state.done ? 'line-through' : 'none'
      fontWeight: this.state.done ? 'bold' : 'normal'
    };


    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
    );
  }
} // End of GroceryListItem class component

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => 
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
); 


ReactDOM.render(<App />, document.getElementById("app"));