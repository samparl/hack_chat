const React = require('react');
const UserForm = require('./user_form');
const SessionActions = require('../../actions/session_actions');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h2>Sign in here</h2>
        <UserForm form="login" callback={ SessionActions.logIn }/>
      </div>
    );
  }
});
