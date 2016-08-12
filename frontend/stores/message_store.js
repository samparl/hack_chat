const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const MessageConstants = require('../constants/message_constants');

let _messages = [];

const MessageStore = new Store(AppDispatcher);

const resetMessages = function(messages) {
  // debugger
  _messages = messages;
};

const newMessage = function(message) {
  _messages.push(message);
};

MessageStore.messages = function() {
  return _messages.slice();
};

MessageStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case MessageConstants.MESSAGES_RECEIVED:
      resetMessages(payload.messages);
      this.__emitChange();
      break;
    case MessageConstants.NEW_MESSAGE:
      newMessage(payload.message);
      this.__emitChange();
      break;
    default:

  }
};


module.exports = MessageStore;
