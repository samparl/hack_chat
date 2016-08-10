const React = require('react');
const ModalActions = require('../../../actions/modal_actions');
const ChannelModal = require('../../modals/add_channel_modal');

module.exports = React.createClass({
  openChannelModal() {
    // ModalActions.displayModal(ChannelModal);
  },

  render() {
    return(
      <span className="title" onClick={ this.openChannelModal }>
        DIRECT MESSAGES ({this.props.count})
      </span>
    );
  }
});
