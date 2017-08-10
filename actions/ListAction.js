var AppDispatcher = require('../dispatcher/AddDispatcher');

var ListActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  changeInputValue: function (text) {
    AppDispatcher.dispatch({
      actionType: 'CHANGE_INPUT_VALUE',
      text: text
    })
  }

};

module.exports = ListActions;
