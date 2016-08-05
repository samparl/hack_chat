const React = require('react');
const Modal = require('./modal');
const ChannelStore = require('../../stores/channels');
const ModalActions = require('../../actions/modal_actions');
const ChannelIndex = require('../left_nav/channel_panel/channel_index');

module.exports = React.createClass({
  getInitialState() {
    return({
      channels: ChannelStore.all()
    });
  },

  componentDidMount() {
    this.setState({
      channels: ChannelStore.all()
    });
  },

  closeModal() {
    ModalActions.removeModal();
  },

  render(){

    let contents = (
      <div className="channel-modal">
        <button className="close" onClick={ this.closeModal }/>
        <h2>Browse all {this.state.channels.length} channels</h2>
        <ChannelIndex />
        <h3>Channels you can join</h3>
        <h3>Channels you belong to</h3>
      </div>
    );

    return(
      <Modal contents={ contents } />
    );
  }
});
