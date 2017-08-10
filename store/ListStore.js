var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  inputValue: '',

  items: [],

  getInputValue: function () {
    return this.inputValue;
  },

  getItems: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  inputChangeHandler: function (text) {
    this.inputValue = text;
  },

  addAddListener: function (callback) {
    this.on('add',callback);
  },

  removeAddListener: function (callback) {
    this.removeListener('add',callback);
  },

  emitAdd: function () {
    this.emit('add');
  },

  addInputChangeHandler: function (callback) {
    this.on('inputChange', callback);
  },

  removeInputChangeHandler: function (callback) {
    this.removeListener('inputChange', callback);
  },

  emitInputChange: function () {
    this.emit('inputChange');
  }
});

module.exports = ListStore;
