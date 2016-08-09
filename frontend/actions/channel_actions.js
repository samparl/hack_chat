const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const ChannelConstants = require('../constants/channel_constants');

const ChannelActions = {
  fetchChannels() {
    ApiUtil.fetchChannels(this.receiveChannels);
  },

  joinChannel(id, setCurrentChannel) {
    ApiUtil.joinChannel(id, ChannelActions.receiveSubscribedChannel);
  },

  setCurrentChannel(channel) {
    // debugger
    AppDispatcher.dispatch({
      actionType: ChannelConstants.SET_CURRENT_CHANNEL,
      channel: channel
    });
  },

  leaveChannel(channel) {
    ApiUtil.leaveChannel(channel, this.removeChannel);
  },

  removeChannel(response) {
    AppDispatcher.dispatch({
      actionType: ChannelConstants.REMOVE_CHANNEL,
      channel: response
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

module.exports = ChannelActions;
