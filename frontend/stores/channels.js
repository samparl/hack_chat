const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ChannelConstants = require('../constants/channel_constants');

var _channels = {
  subscribed: {},
  unsubscribed: {}
};

const ChannelStore = new Store(AppDispatcher);

ChannelStore.subscribed = function() {
  return Object.keys(_channels.subscribed).map(function(key) {
    return _channels.subscribed[key];
  });
};

ChannelStore.unsubscribed = function() {
  return Object.keys(_channels.unsubscribed).map(function(key) {
    return _channels.unsubscribed[key];
  });
};

ChannelStore.resetChannels = function(channels) {
  _channels.subscribed = {};
  channels.subscribed.forEach(function(channel) {
    _channels.subscribed[channel.id] = channel;
  });

  _channels.unsubscribed = {};
  channels.unsubscribed.forEach(function(channel) {
    _channels.unsubscribed[channel.id] = channel;
  });
  // debugger
};

const addChannel = function(channel) {
  _channel[channel.id] = channel;
};

ChannelStore.__onDispatch = function(payload) {
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
