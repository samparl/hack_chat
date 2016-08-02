const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const ChannelConstants = require('../constants/channel_constants');

module.exports = {
  fetchChannels() {
    ApiUtil.fetchChannels(this.receiveChannels);
  },

  getChannel(id) {
    ApiUtil.getChannel(id, this.receiveChannel);
  },

  receiveChannels(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.CHANNELS_RECEIVED,
      channels: response
    });
  },

  receiveChannel(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.CHANNEL_RECEIVED,
      channel: response
    });
  }
};
