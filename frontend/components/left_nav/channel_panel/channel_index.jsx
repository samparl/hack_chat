// import { React } from 'react';
const React = require('react');
const ChannelStore = require('../../../stores/channels');
const ChannelActions = require('../../../actions/channel_actions');
const ChannelIndexItem = require('./channel_index_item');

const ChannelIndex = React.createClass({
  getInitialState() {
    return({
      selected: null
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
      selected: ChannelStore.currentChannel()
    });
  },

  _onClick(channel_key) {
    this.props.callback(
      this.props.channels[channel_key].id
    );
    if(this.props.modal) ModalActions.removeModal();
  },

  render() {
    let channels = this.props.channels.map(function(channel, i) {

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
