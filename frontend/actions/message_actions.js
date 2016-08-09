const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageActions = {
  fetchMessages(channel_id) {
    ApiUtil.fetchMessages(channel_id, MessageActions.receiveMessages);
  },

  receiveMessages(messages) {
    AppDispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    });
  }
};

module.exports = MessageActions;
