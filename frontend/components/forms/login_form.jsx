const React = require('react'),
      UserForm = require('./user_form'),
      TeamStore = require('../../stores/team_store'),
      SessionActions = require('../../actions/session_actions'),
      SessionConstants = require('../../constants/session_constants');

module.exports = React.createClass({

  _defaultUser() {
    SessionActions.logIn({
      email: 'user1@user.com',
      password: 'password'
    });
  },

  render() {
    // debugger
    return(
      <article className="centered">
        <h2>Sign in to { this.props.team }</h2>
        <span className="group">Enter your email address and password
          (<a className="auth-link" onClick={ this._defaultUser }>
            Guest
          </a>)
        </span>
        <UserForm form={ SessionConstants.login } callback={ SessionActions.logIn }/>
      </article>
    );
  }
});
