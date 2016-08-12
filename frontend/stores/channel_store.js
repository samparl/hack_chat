const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ChannelConstants = require('../constants/channel_constants');

var _channels = {};

var _currentChannel = null;

const ChannelStore = new Store(AppDispatcher);

ChannelStore.channels = function() {
  return Object.keys(_channels).map(function(key) {
    return _channels[key];
  });
};

ChannelStore.subscribed = function() {
  return Object.keys(_channels).reduce(function(subscribed, key) {
    if(_channels[key].subscribed && !_channels[key].direct) subscribed.push(_channels[key]);
    return subscribed;
  }, []);
};

ChannelStore.unsubscribed = function() {
  return Object.keys(_channels).reduce(function(unsubscribed, key) {
    if(!_channels[key].subscribed) unsubscribed.push(_channels[key]);
    return unsubscribed;
  }, []);
};

ChannelStore.directChannels = function() {
  return Object.keys(_channels).reduce(function(direct, key) {
    if(_channels[key].direct) direct.push(_channels[key]);
    return direct;
  }, []);
};

ChannelStore.currentChannel = function() {
  return _currentChannel;
};

ChannelStore.resetChannels = function(channels) {
  _channels = {};
  channels.forEach(function(channel) {
    _channels[channel.id] = channel;
  });
};

const setCurrentChannel = function(channel) {
  _currentChannel = channel;
};

const toggleChannel = function(channel) {
  if(!channel.direct) _channels[channel.id] = channel;
  if(channel.direct) delete _channels[channel.id];
};

const addChannel = function(channel) {
  if(!Object.keys(_channels).includes(channel.id)){
    _channels[channel.id] = channel;
  }
  setCurrentChannel(channel);
};

// const leaveChannel = function(channel) {
//   delete _channels.subscribed[channel.id];
//   _channels.unsubscribed[channel.id] = channel;
// };

ChannelStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ChannelConstants.CHANNELS_RECEIVED:
      ChannelStore.resetChannels(payload.channels.channels);
      ChannelStore.__emitChange();
      break;

    case ChannelConstants.SET_CURRENT_CHANNEL:
      setCurrentChannel(payload.channel);
      ChannelStore.__emitChange();
      break;

    case ChannelConstants.TOGGLE_SUBSCRIPTION:
      toggleChannel(payload.channel);
      ChannelStore.__emitChange();
      break;

    case ChannelConstants.CHANNEL_RECEIVED:
      addChannel(payload.channel);
      ChannelStore.__emitChange();
      break;
    default:
  }
};

module.exports = ChannelStore;
