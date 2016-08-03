const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ChannelConstants = require('../constants/channel_constants');

var _channels = {};

const ChannelStore = new Store(AppDispatcher);

ChannelStore.all = function() {
  return Object.keys(_channels).map(function(key) {
    return _channels[key];
  });
};

ChannelStore.resetChannels = function(channels) {
  _channels = {};
  channels.forEach(function(channel) {
    _channels[channel.id] = channel;
  });
};

const addChannel = function(channel) {
  _channel[channel.id] = channel;
};

ChannelStore.__onDispatch = function(payload) {
  // debugger
  switch (payload.actionType) {
    case ChannelConstants.CHANNELS_RECEIVED:
      ChannelStore.resetChannels(payload.channels);
      ChannelStore.__emitChange();
      break;
    case ChannelConstants.CHANNEL_RECEIVED:
      addChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    default:
  // debugger
  }
};

module.exports = ChannelStore;
