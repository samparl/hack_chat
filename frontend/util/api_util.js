const SessionStore = require('../stores/sessions_store');

module.exports = {
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
      // data: {join: true},
      success(response) {
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
        console.log(JSON.stringify(response));
      }
    });
  }
};
