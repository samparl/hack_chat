const React = require('react');
const Modal = require('./modal');
const ChannelStore = require('../../stores/channels');
const ModalActions = require('../../actions/modal_actions');
const SubscribedChannelIndex = require('../left_nav/channel_panel/subscribed_channel_index');
const UnsubscribedChannelIndex = require('../left_nav/channel_panel/unsubscribed_channel_index');

module.exports = React.createClass({
  getInitialState() {
    return({
      subscribedChannels: ChannelStore.subscribed(),
      unsubscribedChannels: ChannelStore.unsubscribed()
    });
  },

  componentDidMount() {
    this.setState({
      unsubscribedChannels: ChannelStore.unsubscribed(),
      subscribedChannels: ChannelStore.subscribed()
    });
  },

  closeModal() {
    ModalActions.removeModal();
  },

  render(){

    let contents = (
      <div className="channel-modal">
        <button className="close" onClick={ this.closeModal }/>
        <h2>Browse all {
            this.state.subscribedChannels.length + this.state.unsubscribedChannels.length
          } channels</h2>
        <h3>Channels you can join</h3>
        <UnsubscribedChannelIndex />
        <h3>Channels you belong to</h3>
        <SubscribedChannelIndex />
      </div>
    );

    return(
      <Modal contents={ contents } />
    );
  }
});
