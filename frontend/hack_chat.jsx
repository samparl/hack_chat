import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      EnterTeam = require('./components/teams/enter_team'),
      LoginForm = require('./components/forms/login_form_container'),
      SignUpInfo = require('./components/forms/sign_up_container'),
      Main = require('./components/main'),
      SessionActions = require('./actions/session_actions'),
      ModalConductorUtil = require('./util/modal_conductor_util'),
      ApiUtil = require('./util/api_util'),
      MessageActions = require('./actions/message_actions'),
      ChannelActions = require('./actions/channel_actions'),
      UserActions = require('./actions/user_actions'),
      ChannelStore = require('./stores/channel_store'),
      SessionStore = require('./stores/session_store'),
      SignUpStore = require('./stores/signup_store'),
      UserStore = require('./stores/user_store'),
      MessageStore = require('./stores/message_store'),
      TeamStore = require('./stores/team_store');

window.ApiUtil = ApiUtil;
window.MessageActions = MessageActions;
window.MessageStore = MessageStore;
window.UserActions = UserActions;
window.ChannelStore = ChannelStore;
window.ChannelStore = ChannelStore;
window.UserActions = UserActions;
window.SignUpStore = SignUpStore;

const App = React.createClass({

  getInitialState() {
    return {
      loggedIn: SessionStore.isUserLoggedIn()
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._updatePage);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _updatePage(loggedIn) {
    this.setState({
      loggedIn: SessionStore.isUserLoggedIn()
    });
    if(this.loggedIn){
      hashHistory.push('/enter');
    } else {
      hashHistory.push('/main');
    }
  },

  render() {
    let content = <div>Hello</div>;
    return (
      <div>
        <ModalConductorUtil />
        {this.props.children}
      </div>
    );
  }
});

function _ensureLoggedIn(nextState, replace) {
  if (!SessionStore.isUserLoggedIn()) {
    replace('/');
  }
}

function _ensureLoggedOut(nextState, replace) {
  if (SessionStore.isUserLoggedIn()) {
    replace('/main');
  }
}

function _loginRedirect(nextState, replace) {
  if(!SessionStore.isUserLoggedIn()) {
    let path = nextState.location.pathname;
    let addn = path[path.length - 1] === "/" ? 'login' : '/login';
    replace(nextState.location.pathname + addn);
  }
}

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ EnterTeam } />
    <Route component={ EnterTeam } onEnter={ _ensureLoggedOut } />
    <Route path="team/:id" onEnter={ _ensureLoggedOut }>
      <IndexRoute onEnter={ _loginRedirect } component={ SignUpInfo } />
      <Link to="login" />
      <Route path="signup" component={ SignUpInfo } />
      <Route path="login" component={ LoginForm } />
    </Route>
    <Route path="/main" component={ Main } onEnter={ _ensureLoggedIn } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  if(window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(<Router history={ hashHistory } routes={ routes } />, root);
});
