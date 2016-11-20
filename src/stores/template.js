import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../constants/dispatcher';
import constants from '../constants/template';

const CHANGE_EVENT = 'change';
let _items = [];

var store = assign({}, EventEmitter.prototype, {

  initialise: function(data) {
    _items = data;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  if (action.actionType === undefined) {
    throw Error('Attempting to dispatch an undefined action. Please check your constants.');
  }

  switch (action.actionType) {

    case constants.INITIALISE:
      store.initialise(action.data);
      break;

    default:
      return true;
  }
});

module.exports = store;
