import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Authentication = require('./components/authentication'),
      UserForms = require('./components/user_forms'),
      LoginForm = require('./components/forms/login_form'),
      SignUpForm = require('./components/forms/signup_form'),
      Main = require('./components/main'),
      SessionActions = require('./actions/session_actions'),
      ModalConductorUtil = require('./util/modal_conductor_util'),
      ApiUtil = require('./util/api_util'),
      MessageActions = require('./actions/message_actions'),
      ChannelActions = require('./actions/channel_actions'),
      UserActions = require('./actions/user_actions'),
      ChannelStore = require('./stores/channel_store'),
      SessionStore = require('./stores/session_store'),
      UserStore = require('./stores/user_store'),
      MessageStore = require('./stores/message_store');

window.ApiUtil = ApiUtil;
window.MessageActions = MessageActions;
window.MessageStore = MessageStore;
window.UserActions = UserActions;
window.ChannelStore = ChannelStore;
window.ChannelStore = ChannelStore;
window.UserActions = UserActions;

const App = React.createClass({

  // getInitialState() {
  //   return {
  //     loggedIn: SessionStore.isUserLoggedIn()
  //   };
  // },

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
  // debugger
  if (!SessionStore.isUserLoggedIn()) {
    replace('/enter');
  }
}

function _ensureLoggedOut(nextState, replace) {
  if (SessionStore.isUserLoggedIn()) {
    replace('/');
  }
}


// const routes = (
//   <Route path="/" component={App}>
//     <IndexRoute component={ AppIndex } onEnter={_redirectIfNotLoggedIn} />
//     <Route path="login" component={ LoginForm } onEnter={_redirectNotLoggedIn} />
//     <Route path="signup" component={ SignUpForm } onEnter={_redirectNotLoggedIn} />
//   </Route>
// );

// const routes = (
//   <Route path="/" component={App}>
//     <IndexRoute component={ AppIndex } />
//     <Route path="login" component={ LoginForm } />
//     <Route path="signup" component={ SignUpForm } />
//   </Route>
// );


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ Main } onEnter={ _ensureLoggedIn } />
    <Route path="enter" component={ UserForms } onEnter={ _ensureLoggedOut } />
    // <Route path="login" component={ LoginForm } />
    // <Route path="signup" component={ SignUpForm } />
    <Route path="main" component={ Main } onEnter={ _ensureLoggedIn } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  if(window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(<Router history={ hashHistory } routes={ routes } />, root);
});
