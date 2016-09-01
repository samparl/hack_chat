// POTENTIALLY DEPRECATED - SEE FRED'S "BEFORE ACTION" SOLUTION IN ENTRY FILE

const React = require('react'),
      SessionStore = require('../stores/session_store'),
      Main = require('./main'),
      LoginForm = require('./forms/login_form'),
      SignUpForm = require('./forms/signup_form'),
      TeamStore = require('../stores/team_store'),
      TeamActions = require('../actions/team_actions'),
      SessionActions = require('../actions/session_actions'),
      ExternalHeader = require('./external_header');

module.exports = React.createClass({
  getInitialState() {
      return({
        signup_page: false,
        team: TeamStore.name()
      });
  },

  componentDidMount() {
    this.teamListener = TeamStore.addListener(this._handleTeam);
    TeamActions.fetchTeamName(this.props.params.id);
  },

  componentWillUnmount() {
    this.teamListener.remove();
  },

  _handleTeam() {
    // debugger
    this.setState({
      team: TeamStore.name()
    });
  },

  _onClick(e) {
    e.preventDefault();
    let new_page = (this.state.signup_page ? false : true);
    this.setState({
      signup_page: new_page
    });
  },

  _guestSignIn(e) {
    e.preventDefault();
    SessionActions.logIn({
      email: 'user1@user.com',
      password: 'password'
    });
  },

  render() {
    let form;
    let link_text;
    if(this.state.signup_page) {
      form = <SignUpForm team={ this.state.team } />;
      link_text = "Have an account?";
    } else {
      form = <LoginForm team={ this.state.team } />;
      link_text = "New user?";
    }

    return(
      <div className="auth-page">
        <ExternalHeader />
        { form }
        <button onClick={ this._onClick }>{ link_text }</button>
        <button onClick={ this._guestSignIn }>Guest User</button>
      </div>
    );
  }
});
