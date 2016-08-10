const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageActions = {
  fetchMessages(channel_id) {
    ApiUtil.fetchMessages(channel_id, MessageActions.receiveMessages);
  },

  postMessage(message) {
    ApiUtil.postMessage(message, MessageActions.messagePosted);
  },

  receiveMessages(messages) {
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  },

  newMessage(message) {
    AppDispatcher.dispatch({
      actionType: MessageConstants.NEW_MESSAGE,
      message: message
    });
  },

  messagePosted(message) {
    // debugger
  }
};

module.exports = MessageActions;
