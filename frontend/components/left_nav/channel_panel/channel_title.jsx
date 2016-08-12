const React = require('react');
const ModalActions = require('../../../actions/modal_actions');
const ChannelModal = require('../../modals/add_channel_modal');

module.exports = React.createClass({

  render() {
    return(
      <span className="title" onClick={ this.props.callback }>
        { this.props.title } ({this.props.count})
        <button className="remove-channel" onClick={ this.props.callback }></button>
    </span>
    );
  }
});
