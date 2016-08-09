// import { React } from 'react';
const React = require('react');
const ChannelStore = require('../../../stores/channel_store');
const ChannelActions = require('../../../actions/channel_actions');
const ChannelIndexItem = require('./channel_index_item');

const ChannelIndex = React.createClass({
  getInitialState() {
    return({
      channels: [],
      selected: null
    });
  },

  _onChange() {
    this.setState({
      channels: ChannelStore.subscribed()
    });
  },

  _onClick(key) {
    this.setState({
      selected: key
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
    let channels = this.state.channels.map(function(channel, i) {

      let selected;
      if(this.state.selected === i) {
        selected = " selected";
      } else {
        selected = " unselected";
      }

      return (
        <li key={ i }
          onClick={ () => this._onClick(i) }
          className={ "channel-index-item"  + selected }>
          { channel.title }
        </li>
      );
    }.bind(this));

    return(
      <div className="channel-index">
        <ul>
          {
            channels
          }
        </ul>
      </div>
    );
  }
});

module.exports = ChannelIndex;
