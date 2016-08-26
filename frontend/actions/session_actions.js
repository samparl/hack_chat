const SessionApiUtil = require('../util/session_api_util'),
      AppDispatcher = require('../dispatcher/dispatcher'),
      SessionConstants = require('../constants/session_constants'),
      ErrorActions = require('./error_actions.js'),
      hashHistory = require('react-router').hashHistory;

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
    // hashHistory.push("/main");
  },

  logOut() {
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
    hashHistory.push("/enter");
  }
};

module.exports = SessionActions;
