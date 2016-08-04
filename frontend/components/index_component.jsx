const React = require('react');
const SessionStore = require('../stores/sessions');
const AppIndex = require('./app_index');
const AuthenticationIndex = require('./authentication_index');
// const LoginForm = require('./forms/login_form');

module.exports = React.createClass({
  getInitialState() {
      return({
        status: SessionStore.isUserLoggedIn()
      });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({
      status: SessionStore.isUserLoggedIn()
    });
  },

  render() {
    if(this.state.status) {
      return <AppIndex />;
    } else {
      return <AuthenticationIndex />;
    }
  }
});
