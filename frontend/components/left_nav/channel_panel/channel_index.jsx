// import { React } from 'react';
const React = require('react');
const ChannelStore = require('../../../stores/channels');
const ChannelActions = require('../../../actions/channel_actions');
const ChannelIndexItem = require('./channel_index_item');

const ChannelIndex = React.createClass({
  getInitialState() {
    return({
      selected: ChannelStore.currentChannel()
    });
  },

  componentDidMount() {
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

  _leaveChannel(e, channel_key) {
    // debugger
    e.stopPropagation();
    ChannelActions.leaveChannel(
      this.props.channels[channel_key].id
    );
  },

  render() {
    // debugger
    let channels = this.props.channels.map(function(channel, i) {

      let selected;
      if(this.state.selected === channel.id) {
        selected = " selected";
      } else {
        selected = " unselected";
      }

      return (
        <li key={ i }
          onClick={ () => this._onClick(i) }
          className={ "channel-index-item"  + selected }>
          { channel.title }
          <button className="remove-channel" onClick={ (e) => this._leaveChannel(e, i) }></button>
        </li>
      );
    }.bind(this));
    // debugger
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
