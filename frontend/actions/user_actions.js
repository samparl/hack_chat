const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const ApiUtil = require('../util/api_util');

const UserActions = {
  fetchUsers() {
    ApiUtil.fetchUsers(UserActions.receiveUsers);
  },

  receiveUsers(response) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: response
    });
  }
};

module.exports = UserActions;
