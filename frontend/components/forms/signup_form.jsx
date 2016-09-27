const React = require('react'),
      UserForm = require('./user_form'),
      SessionActions = require('../../actions/session_actions'),
      SessionConstants = require('../../constants/session_constants');

module.exports = React.createClass({
  getInitialState() {
    return({
      firstName: nil,
      lastName: nil,
      userName: nil,
      email: nil,
      password: nil
    });
  },

  _handleName(e) {
    e.preventDefault();
    this.setState({
      firstName: e.target.value.firstName,
      lastName: e.target.value.lastName,
      userName: e.target.value.userName,
    });
  },

  _handleUser(e) {
    e.preventDefault();
    this.setState({
      userName: e.target.value.userName,
      password: e.target.value.password
    });
  },

  _submitUser(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },

  render() {
    return(
      <article className="centered">
        <h2>Sign up here</h2>
        <UserForm
          teamId={ this.props.teamId }
          form={ SessionConstants.signup }
          callback={ SessionActions.signUp } />
      </article>
    );
  }
});
