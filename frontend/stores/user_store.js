const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(AppDispatcher);

let _users = [];

const resetUsers = function(users) {
  _users = users;
};

UserStore.users = function() {
  return _users.slice();
};


UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      this.__emitChange();
      break;
    default:

  }
};

module.exports = UserStore;
