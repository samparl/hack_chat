// const link = function

module.exports = {
  form: {
    type: "Log In",
    containerClass: "auth-page",
    presentationClass: "centered",
    inputClass: "auth-page"
  },
  pages: [{
    about: {
      title: "Sign in to hack-chat",
      subTitle: <div>Enter your email address and password (
        <a className="auth-link" onClick={ this._defaultUser }>
          Guest
        </a>)</div>,
      buttonText: "Sign In",
      required: ['username', 'password'],
      submit(state) {
        SessionActions.login(state.values);
      }
    },
    fields: [
      {
        handle: "username",
        placeholder: "you@domain.com"
      },
      {
        handle: "password",
        placeholder: "password",
        type: password
      }
    ]
  }]
};
