var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../store/ListStore');

AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitAdd();
      break;
    case 'CHANGE_INPUT_VALUE':
      ListStore.inputChangeHandler(action.text);
      ListStore.emitInputChange();
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;
