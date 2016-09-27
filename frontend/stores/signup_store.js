const AppDispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    SignUpConstants = require('../constants/signup_constants'),
    hashHistory = require('react-router').hashHistory;

const _user = {
  firstName: null,
  lastName: null,
  userName: null,
  password: null,
  teamId: null
};

const _errors = {
  info: [],
  cred: [],
  base: []
};

const SignUpStore = new Store(AppDispatcher);

const validateInfo = function(data) {
  if(!data.userName) _errors.info.push("Invalid username");
  if(!data.firstName) _errors.info.push("Invalid first name");
  if(!data.lastName) _errors.info.push("Invalid last name");
};

const validateCred = function(data) {
  if(!data.email) _errors.cred.push("Invalid email");
  if(!data.password) _errors.cred.push("Invalid password");
};

const validUser = function(user) {
  let tag = true;
  Object.keys(_user).forEach(function(attr) {
    _errors.base.push(`${ attr } cannot be blank`);
    if(!_user[attr]) tag = false;
  });
  return tag;
};

const _handleInfo = function(data) {
  validateInfo(data);
  if(_errors.info.length < 1) {
    _user.firstName = data.firstName;
    _user.userName = data.userName;
    _user.lastName = data.lastName;
    hashHistory.push(`team/${ data.teamId }/cred`);
  }
};

const _handleCred = function(data) {
  validateCred(data);
  if(_errors.cred.length < 1) {
    _user.email = data.email;
    _user.password = data.password;
    _user.teamId = data.teamId;
    console.log("success!");
    console.log(_user);
  }
};

const _handleUser = function(user) {
  if(validUser(user)) {

  }
};

SignUpStore.getInfo = function() {
  return {
    name: _user.firstName + " " + _user.lastName,
    username: _user.userName
  };
};

SignUpStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SignUpConstants.USER_INFO:
      _handleInfo(payload.data);
      break;
    case SignUpConstants.USER_CRED:
      _handleCred(payload.data);
      break;
    default:

  }
};

module.exports = SignUpStore;
