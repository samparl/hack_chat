const React = require('react');

module.exports = {
  signUp(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: {
        user: user
      },
      success,
      error
    });
  },

  logIn(data, success, error) {
    $.ajax({
      url: "api/sessions",
      method: "POST",
      data: {
        session: data
      },
      success,
      error
    });
  },

  logOut(success, error) {
    $.ajax({
      url: "api/sessions",
      method: "DELETE",
      success,
      error
    });
  }
};
