// import { React } from 'react';
const React = require('react');
const ChannelStore = require('../../../stores/channels');
const ChannelActions = require('../../../actions/channel_actions');
const ChannelIndexItem = require('./channel_index_item');

const UnsubscribedChannelIndex = React.createClass({
  getInitialState() {
    return({
      channels: []
    });
  },

  _onChange() {
    this.setState({
      channels: ChannelStore.unsubscribed()
    });
  },

  componentDidMount() {
    ChannelActions.fetchChannels();
    this.channelsListener = ChannelStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.channelsListener.remove();
  },

  render() {
    return(
      <div className="channel-index">
        <ul>
          {
            this.state.channels.map(function(channel, i) {
              return <ChannelIndexItem key={ i } channel={ channel } />;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = UnsubscribedChannelIndex;
