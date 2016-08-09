const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ChannelConstants = require('../constants/channel_constants');

var _channels = {
  currentChannel: null
};

const ChannelStore = new Store(AppDispatcher);

ChannelStore.channels = function() {
  return Object.keys(_channels).map(function(key) {
    return _channels[key];
  });
};

ChannelStore.subscribed = function() {
  let subscribed = Object.keys(_channels).reduce(function(subscribed, key) {
    if(_channels[key].subscribed) subscribed.push(_channels[key]);
    return subscribed;
  }, []);
};

ChannelStore.unsubscribed = function() {
  let unsubscribed = Object.keys(_channels).reduce(function(unsubscribed, key) {
    if(!_channels[key].subscribed) unsubscribed.push(_channels[key]);
    return unsubscribed;
  }, []);
};

ChannelStore.currentChannel = function() {
  return _channels.currentChannel;
};

ChannelStore.resetChannels = function(channels) {
  _channels = {};
  channels.forEach(function(channel) {
    _channels[channel.id] = channel;
  });
  // debugger
};

const setCurrentChannel = function(channel) {
  _channels.currentChannel = channel;
};

const toggleChannelSubscription = function(channel) {
  _channels[channel.id].subscribed = !_channels[channel.id].subscribed;
};

const addSubscribedChannel = function(channel) {
  delete _channels.unsubscribed[channel.id];
  _channels.subscribed[channel.id] = channel;
  _channels.currentChannel = channel;
};

const leaveChannel = function(channel) {
  delete _channels.subscribed[channel.id];
  _channels.unsubscribed[channel.id] = channel;
};

ChannelStore.__onDispatch = function(payload) {
  // debugger
  switch (payload.actionType) {
    case ChannelConstants.CHANNELS_RECEIVED:
      ChannelStore.resetChannels(payload.channels.channels);
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
    case ChannelConstants.REMOVE_CHANNEL:
      leaveChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    case ChannelConstants.TOGGLE_SUBSCRIPTION:
      toggleChannelSubscription(payload.channel);
      ChannelStore.__emitChange();
      break;
    default:
  }
};

module.exports = ChannelStore;
