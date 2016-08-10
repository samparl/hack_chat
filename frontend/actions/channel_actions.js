const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const ChannelConstants = require('../constants/channel_constants');

const ChannelActions = {
  fetchChannels() {
    ApiUtil.fetchChannels(ChannelActions.receiveChannels);
  },

  joinChannel(channel) {
    ApiUtil.joinChannel(channel.id, ChannelActions.receiveToggledChannel);
  },

  leaveChannel(channel) {
    ApiUtil.leaveChannel(channel, ChannelActions.receiveToggledChannel);
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

  receiveToggledChannel(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.TOGGLE_SUBSCRIPTION,
      channel: response
    });
  }
};

module.exports = ChannelActions;
