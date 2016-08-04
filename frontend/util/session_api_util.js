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
      error(xhr) {
        const errors = xhr.responseJSON;
        error("Sign Up", errors);
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
        error("Log In", errors);
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
