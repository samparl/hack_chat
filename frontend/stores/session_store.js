const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

let _currentUser = {};
let _currentUserFetched = false;

let _logIn = function(user) {
  _currentUser = user;
  _currentUserFetched = true;
  SessionStore.__emitChange();
};

let _logOut = function() {
  _currentUser = {};
  _currentUserFetched = true;
  SessionStore.__emitChange();
};

const SessionStore = new Store(AppDispatcher);

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _logIn(payload.currentUser);
      // alert('logged in');
      break;
    case SessionConstants.LOGOUT:
      _logOut();
      // alert('logged out');
      break;
    default:

  }
};

module.exports = SessionStore;
