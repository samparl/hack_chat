const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');
const SessionStore = require('./sessions_store');

let _errors = {};
let _form = "";

const _setErrors = function(payload) {
  _form = payload.form;
  _errors = payload.errors;
  ErrorStore.__emitChange();
};

const _clearErrors = function() {
  _form = "";
  _errors = {};
  ErrorStore.__emitChange();
};

const ErrorStore = new Store(AppDispatcher);

ErrorStore.errors = function(form) {
  if(form === _form) {
    return Object.assign({}, _errors);
  } else {
    return {};
  }
};

ErrorStore.form = function() {
  return _form;
};

ErrorStore.__onDispatch =function(payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      break;
    default:
  }
};

module.exports = ErrorStore;
