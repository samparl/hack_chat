const React = require('react');
const UserForm = require('./user_form');
const SessionActions = require('../../actions/session_actions');

module.exports = React.createClass({
  render() {
    return(
      <div>
        <h2>Sign up here</h2>
        <UserForm form="Sign Up" callback={ SessionActions.signUp }/>
      </div>
    );
  }
});
