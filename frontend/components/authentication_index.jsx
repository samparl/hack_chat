// POTENTIALLY DEPRECATED - SEE FRED'S "BEFORE ACTION" SOLUTION IN ENTRY FILE

const React = require('react');
const SessionStore = require('../stores/sessions');
const AppIndex = require('./app_index');
const LoginForm = require('./forms/login_form');
const SignUpForm = require('./forms/signup_form');

module.exports = React.createClass({
  getInitialState() {
      return({
        signup_page: false
      });
  },

  _onClick(e) {
    e.preventDefault();
    let new_page = (this.state.signup_page ? false : true);
    this.setState({
      signup_page: new_page
    });
  },

  render() {
    let form;
    let link_text;
    if(this.state.signup_page) {
      form = <SignUpForm />;
      link_text = "Have an account?";
    } else {
      form = <LoginForm />;
      link_text = "New user?";
    }

    return(
      <div className="auth-page">
        { form }
        <button onClick={ this._onClick }>{ link_text }</button>
      </div>
    );
  }
});
