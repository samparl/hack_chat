const React = require('react');
const SessionConstants = require('../constants/session_constants');

module.exports = {
  signUp(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: {
        user: user
      },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error(SessionConstants.signup, errors);
      }
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
      error(xhr) {
        const errors = xhr.responseJSON;
        error(SessionConstants.login, errors);
      }
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
