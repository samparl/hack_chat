const ChannelIndex = require('./channel_index');
const ChannelTitle = require('./channel_title');
const DirectChannelTitle = require('./direct_channel_title');
const ChannelStore = require('../../../stores/channel_store');
const ChannelActions = require('../../../actions/channel_actions');
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

  render() {
    let channelCount = (
      this.state.subscribedChannels.length +
      this.state.unsubscribedChannels.length
    );

    if (!this.state.fetched) return <div></div>;

    return(
      <div className="panel-content">
        <ChannelTitle
          count={ channelCount }
          fetched={this.state.fetched} />
        <ChannelIndex
          channels={ this.state.subscribedChannels }
          callback={ ChannelActions.setCurrentChannel } />
        <DirectChannelTitle
            count={ this.state.directChannels.length }
            fetched={this.state.fetched} />
        <ChannelIndex
          channels={ this.state.directChannels }
          callback={ ChannelActions.setCurrentChannel } />
      </div>
    );
  }

});
