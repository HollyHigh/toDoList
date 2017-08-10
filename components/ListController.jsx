var React = require('react');
var List = require('./List');
var ListStore = require('../store/ListStore');
var ListActions = require('../actions/ListAction');

class ListController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: ''
    };
    this._addItem = this._addItem.bind(this);
    this._changeInput = this._changeInput.bind(this);
  }

  _addItem(){
    this.setState({items: ListStore.getItems()});
  }

  _changeInput(){
    this.setState({inputValue: ListStore.getInputValue()});
  }

  componentDidMount() {
    ListStore.addAddListener(this._addItem);
    ListStore.addInputChangeHandler(this._changeInput);
  }

  componentWillUnmount() {
    ListStore.removeAddListener(this._addItem);
    ListStore.removeInputChangeHandler(this._changeInput);
  }

  handleInputChange(event) {
    ListActions.changeInputValue(event.target.value);
  }

  handleOnClick(){
    var inputValue = ListStore.getInputValue();
    ListActions.addNewItem(inputValue);
  }

  render() {
    return (<List items={this.state.items}
      inputValue = {this.state.inputValue}
      handleOnClick={this.handleOnClick}
      handleInputChange={this.handleInputChange}/>)
  }
};

module.exports = ListController;
