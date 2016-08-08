const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const ChannelConstants = require('../constants/channel_constants');

module.exports = {
  fetchChannels() {
    ApiUtil.fetchChannels(this.receiveChannels);
  },

  joinChannel(id, setCurrentChannel) {
    ApiUtil.joinChannel(id, this.receiveSubscribedChannel);
  },

  setCurrentChannel(channel) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.SET_CURRENT_CHANNEL,
      channel: channel
    });
  },

  receiveChannels(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.CHANNELS_RECEIVED,
      channels: response
    });
  },

  receiveSubscribedChannel(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.SUBSCRIBED_CHANNEL_RECEIVED,
      channel: response
    });
  },

  // receiveChannel(response) {
  //   AppDispatcher.dispatch({
  //     actionType: ChannelConstants.CHANNEL_RECEIVED,
  //     channel: response
  //   });
  // }
};
