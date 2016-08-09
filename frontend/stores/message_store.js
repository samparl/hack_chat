const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const MessageConstants = require('../constants/message_constants');

let _messages = [];

const MessageStore = new Store(AppDispatcher);

const resetMessages = function(messages) {
  _messages = messages;
};

MessageStore.messages = function() {
  return _messages.splice(0);
};

MessageStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case MessageConstants.MESSAGES_RECEIVED:
      resetMessages(payload.messages);
      this.__emitChange();
      break;
    default:

  }
};


module.exports = MessageStore;
