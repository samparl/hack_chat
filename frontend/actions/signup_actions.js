const AppDispatcher = require('../dispatcher/dispatcher'),
      ErrorActions = require('./error_actions'),
      SignUpConstants = require('../constants/signup_constants'),
      SessionConstants = require('../constants/session_constants'),
      SessionApiUtil = require('../util/session_api_util');

const SignUpActions = {
  userInfo(options) {
    this.persistInfo(options);
  },

  signUp(user) {
    SessionApiUtil.signUp(
      user,
      SignUpActions.receiveCurrentUser,
      ErrorActions.setErrors
    );
  },

  persistInfo(data) {
    AppDispatcher.dispatch({
      actionType: SignUpConstants.USER_INFO,
      data: data
    });
  },

  persistCred(data) {
    AppDispatcher.dispatch({
      actionType: SignUpConstants.USER_CRED,
      data: data
    });
  },

  receiveCurrentUser(response){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: response
    });
  },
};

module.exports = SignUpActions;
