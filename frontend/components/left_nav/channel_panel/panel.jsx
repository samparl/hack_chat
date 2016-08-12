const ChannelIndex = require('./channel_index');
const ChannelTitle = require('./channel_title');
const DirectChannelTitle = require('./direct_channel_title');
const ChannelStore = require('../../../stores/channel_store');
const ChannelActions = require('../../../actions/channel_actions');
const ModalActions = require('../../../actions/modal_actions');
const ChannelModal = require('../../modals/add_channel_modal');
const DirectModal = require('../../modals/direct_channel_modal');
const React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return({
      subscribedChannels: ChannelStore.subscribed(),
      unsubscribedChannels: ChannelStore.unsubscribed(),
      directChannels: ChannelStore.directChannels(),
      fetched: false
    });
  },


  componentDidMount() {
    ChannelActions.fetchChannels();
    this.channelsListener = ChannelStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.channelsListener.remove();
  },

  _onChange() {
    this.setState({
      subscribedChannels: ChannelStore.subscribed(),
      unsubscribedChannels: ChannelStore.unsubscribed(),
      directChannels: ChannelStore.directChannels(),
      fetched: true
    });
  },

  openChannelModal() {
    ModalActions.displayModal(ChannelModal);
  },

  openDirectModal() {
    ModalActions.displayModal(DirectModal);
  },

  render() {
    let channelCount = (
      this.state.subscribedChannels.length +
      this.state.unsubscribedChannels.length
    );

    if (!this.state.fetched) return <div></div>;

    return(
      <div className="panel-content">
        <div className="channel-nav">

          <ChannelTitle
            count={ channelCount }
            fetched={this.state.fetched}
            callback={ this.openChannelModal }
            title="CHANNELS" />

          <ChannelIndex
            channels={ this.state.subscribedChannels }
            callback={ ChannelActions.setCurrentChannel } />

        </div>

        <div className="channel-nav">

          <ChannelTitle
              count={ this.state.directChannels.length }
              fetched={this.state.fetched}
              callback={ this.openDirectModal }
              title="DIRECT CHANNELS" />

          <ChannelIndex
            channels={ this.state.directChannels }
            callback={ ChannelActions.setCurrentChannel } />

        </div>
      </div>
    );
  }

});
