const React = require('react');
const Modal = require('./modal');
const ChannelStore = require('../../stores/channel_store');
const ModalActions = require('../../actions/modal_actions');
const ChannelIndex = require('../left_nav/channel_panel/channel_index');
const ChannelActions = require('../../actions/channel_actions');

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
        <div className="modal-header">
          <div className="circle-button" onClick={ this.closeModal }>
            <div className="icon">esc</div>
          </div>

        </div>
        <div className="channel-block">
          <h2>Browse all {
              this.state.subscribedChannels.length + this.state.unsubscribedChannels.length
            } channels
          </h2>

          <div className="modal-list">
            <h5>Channels you can join</h5>
            <ChannelIndex
              channels={ this.state.unsubscribedChannels }
              callback={ ChannelActions.joinChannel }
              modal="true" />
            <h5>Channels you belong to</h5>
            <ChannelIndex
              channels={ this.state.subscribedChannels }
              callback={ ChannelActions.setCurrentChannel }
              modal="true" />
          </div>
        </div>
      </div>
    );

    return(
      <Modal contents={ contents } />
    );
  }
});
