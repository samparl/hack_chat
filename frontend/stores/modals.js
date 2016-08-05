const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ModalConstants = require('../constants/modal_constants');

const ModalStore = new Store(AppDispatcher);

const _modal = {
  modal: null
};

ModalStore.modal = function() {
  return _modal.modal;
};

const _set = function(modal) {
  _modal.modal = modal;
  ModalStore.__emitChange();
};

const _remove = function() {
  _modal.modal = null;
  ModalStore.__emitChange();
};

ModalStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ModalConstants.DISPLAY:
      _set(payload.modal);
      break;
    case ModalConstants.REMOVE:
      _remove();
      break;
    default:
  }
};

module.exports = ModalStore;
