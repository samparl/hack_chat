import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      Authentication = require('./components/authentication'),
      LoginForm = require('./components/forms/login_form'),
      SignUpForm = require('./components/forms/signup_form'),
      SessionActions = require('./actions/session_actions'),
      ModalConductorUtil = require('./util/modal_conductor_util'),
      ApiUtil = require('./util/api_util'),
      MessageActions = require('./actions/message_actions'),
      ChannelActions = require('./actions/channel_actions'),
      UserActions = require('./actions/user_actions'),
      ChannelStore = require('./stores/channel_store'),
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

// function _redirectIfNotLoggedIn(nextState, replace) {
//   if (!SessionStore.isUserLoggedIn()) {
//     replace('/login');
//   }
// }
//
// function _redirectIfLoggedIn(nextState, replace) {
//   if (SessionStore.isUserLoggedIn()) {
//     replace('/');
//   }
// }


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
    <IndexRoute component={ Authentication } />
    <Route path="login" component={ LoginForm } />
    <Route path="signup" component={ SignUpForm } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  if(window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(<Router history={ hashHistory } routes={ routes } />, root);
});
