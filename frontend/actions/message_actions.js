const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageActions = {
  fetchMessages(channel_id) {
    ApiUtil.fetchMessages(channel_id, MessageActions.receiveMessages);
  },

  postMessage(channel_id, message) {
    ApiUtil.postMessage(channel_id, message, MessageActions.messagePosted);
  },

  receiveMessages(messages) {
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  },

  messagePosted(message) {
    
  }
};

module.exports = MessageActions;
