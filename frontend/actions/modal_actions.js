const AppDispatcher = require('../dispatcher/dispatcher');
const ModalConstants = require('../constants/modal_constants');

module.exports = {
  displayModal(modal) {
    AppDispatcher.dispatch({
      actionType: ModalConstants.DISPLAY,
      modal: modal
    });
  },

  removeModal() {
    AppDispatcher.dispatch({
      actionType: ModalConstants.REMOVE
    });
  }
};
