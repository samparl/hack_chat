const React = require('react'),
      UserForm = require('./user_form'),
      SessionActions = require('../../actions/session_actions'),
      SessionConstants = require('../../constants/session_constants');

module.exports = React.createClass({
  render() {
    // debugger
    return(
      <article className="centered">
        <h2>Sign up here</h2>
        <UserForm
          teamId={ this.props.teamId }
          form={ SessionConstants.signup }
          callback={ SessionActions.signUp }/>
      </article>
    );
  }
});
