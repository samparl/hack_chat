const React = require('react');
const UserForm = require('./user_form');
const SessionActions = require('../../actions/session_actions');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h2>Sign in here</h2>
        <UserForm form="Log In" callback={ SessionActions.logIn }/>
      </div>
    );
  }
});
