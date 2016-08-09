const React = require('react');
const UserForm = require('./user_form');
const SessionActions = require('../../actions/session_actions');
const SessionConstants = require('../../constants/session_constants');

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
