const SessionApiUtil = require('../util/session_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('./error_actions.js');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  fetchCurrentUser(complete){
    SessionApiUtil.fetchCurrentUser(
      SessionActions.receiveCurrentUser,
      complete
    );
  },

  signUp(user) {
    SessionApiUtil.signUp(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logIn(user) {
    SessionApiUtil.logIn(
      user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  logOut() {
    debugger
    SessionApiUtil.logOut(
      SessionActions.removeCurrentUser,
      ErrorActions.setErrors
    );
  },

  receiveCurrentUser(response){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: response
    });
  },

  removeCurrentUser(response){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    // hashHistory.push("/login");
  }
};

module.exports = SessionActions;
