const SignUpActions = require('../../actions/signup_actions');

module.exports = {
  form: {
    type: "Sign Up",
    containerClass: "auth-page",
    presentationClass: "centered",
    inputClass: "auth-page"
  },
  pages: [{
    about: {
      title: "Enter your name",
      buttonText: "Continue",
      required: ['first_name', 'last_name', 'username'],
      // Submit callbacks should be called on the component context
      submit(state) {
        let page, display, newPage;
        page = state.page;
        display = state.display.slice();
        newPage = page + 1;

        [display[page], display[newPage]] = ["none", "block"];
        this.setState({
          display: display,
          page: newPage
        });
      }
    },

    fields: [{
      handle: 'first_name',
      placeholder: "first name"
    }, {
      handle: 'last_name',
      placeholder: "last name"
    }, {
      handle: 'username',
      placeholder: "username"
    }]
  },

  {
    about: {
      title: "Create your account",
      buttonText: "Create user",
      required: ['email', 'password', 'first_name', 'last_name', 'username'],
      submit(state) {
        let data = Object.assign({},
          state.values,
          {team_id: this.props.params.id}
        );
        SignUpActions.signUp(data);
      },
      backButton: '< Previous',
      backCallback(state) {
        let page, display, newPage;
        page = state.page;
        display = state.display.slice();
        newPage = page - 1;

        [display[page], display[newPage]] = ["none", "block"];
        this.setState({
          display: display,
          page: newPage
        });
      }
    },

    fields: [{
      handle: 'email',
      placeholder: "you@domain.com"
    }, {
      handle: 'password',
      placeholder: "password",
      type: "password"
    }]
  }]
};
