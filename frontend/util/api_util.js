const SessionStore = require('../stores/session_store');

module.exports = {
  fetchUsers(callback) {
    $.ajax({
      url: "api/users",
      method: "GET",
      success(response) {
        callback(response);
      }
    });
  },

  fetchChannels(callback) {
    $.ajax({
      url: "api/channels",
      method: "GET",
      success(response) {
        callback(response);
      }
    });
  },

  getChannel(id, callback) {
    $.ajax({
      url: `api/channels/${id}`,
      method: "GET",
      success(response) {
        callback(response);
      }
    });
  },

  joinChannel(id, callback) {
    $.ajax({
      url: `api/channels/${id}/subscribe`,
      method: "PATCH",
      success(response) {
        callback(response);
      }
    });
  },

  createChannel(channel, callback) {
    $.ajax({
      url: `api/channels`,
      method: "POST",
      data: channel,
      success(response) {
        callback(response);
      }
    });
  },

  directChannel(participant, callback) {
    $.ajax({
      url: 'api/channels/direct',
      method: "GET",
      data: {
        channel: {
          title: `${SessionStore.currentUser.id}_${participant.id}`,
          description: 'DirectChannel',
          secondary_user_id: participant.id
        }
      },
      success (response) {
        callback(response);
      }
    });
  },

  leaveChannel(id, callback) {
    $.ajax({
      url: `api/channels/${id}/unsubscribe`,
      method: "PATCH",
      // data: {join: false},
      success(response) {
        callback(response);
      }
    });
  },

  fetchMessages(channel_id, callback) {
    $.ajax({
      url: `api/channels/${channel_id}/messages`,
      method: "GET",
      success(response) {
        callback(response);
      }
    });
  },

  postMessage(message, callback) {
    $.ajax({
      url: `api/channels/${message.channel_id}/messages`,
      method: "POST",
      data: {
        message: { content: message.content }
      },
      success(response) {
        callback(response);
      }
    });
  }
};
