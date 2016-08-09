const React = require('react');
const UserForm = require('./user_form');
const SessionActions = require('../../actions/session_actions');
const SessionConstants = require('../../constants/session_constants');

module.exports = React.createClass({
  render() {
    return(
      <article className="centered">
        <h2>Sign up here</h2>
        <UserForm form={ SessionConstants.signup } callback={ SessionActions.signUp }/>
      </article>
    );
  }
});
