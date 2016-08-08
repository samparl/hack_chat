const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ChannelConstants = require('../constants/channel_constants');

var _channels = {
  subscribed: {},
  unsubscribed: {},
  currentChannel: null
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

ChannelStore.currentChannel = function() {
  return _channels.currentChannel;
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
};

const setCurrentChannel = function(channel) {
  _channels.currentChannel = channel;
};

const addSubscribedChannel = function(channel) {
  _channels.subscribed[channel.id] = channel;
  _channels.currentChannel = channel;
};

ChannelStore.__onDispatch = function(payload) {
  // debugger
  switch (payload.actionType) {
    case ChannelConstants.CHANNELS_RECEIVED:
      ChannelStore.resetChannels(payload.channels);
      ChannelStore.__emitChange();
      break;
    case ChannelConstants.SUBSCRIBED_CHANNEL_RECEIVED:
      addSubscribedChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    case ChannelConstants.SET_CURRENT_CHANNEL:
      setCurrentChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    default:
  }
};

module.exports = ChannelStore;
