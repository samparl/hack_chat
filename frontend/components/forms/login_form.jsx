const React = require('react'),
      UserForm = require('./user_form'),
      SessionActions = require('../../actions/session_actions'),
      SessionConstants = require('../../constants/session_constants');

module.exports = React.createClass({
  render() {
    return(
      <article className="centered">
        <h2>Sign in to hack chat</h2>
        <span className="group">Enter your email address and password</span>
        <UserForm form={ SessionConstants.login } callback={ SessionActions.logIn }/>
      </article>
    );
  }
});
