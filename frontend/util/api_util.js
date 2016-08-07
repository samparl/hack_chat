module.exports = {
  fetchChannels(callback) {
    $.ajax({
      url: "api/channels",
      method: "GET",
      data: {
        user: {
          id: currentUser.id
        }
      },
      success(response) {
        callback(response);
      }
    });
  },
  
  getChannel(id) {
    $.ajax({
      url: `api/channels/${id}`,
      method: "GET",
      success(response) {
        callback(response);
      }
    });
  }
};
