const React = require('react');
const ChannelStore = require('../../../stores/channel_store');
const ChannelActions = require('../../../actions/channel_actions');
const ChannelIndexItem = require('./channel_index_item');
const ModalActions = require('../../../actions/modal_actions');

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
      this.props.channels[channel_key]
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

    let selectedChannelId = this.state.selected ? this.state.selected.id : null;
    let channels = this.props.channels.map(function(channel, i) {

      let selected;
      if(selectedChannelId === channel.id) {
        selected = " selected";
      } else {
        selected = " unselected";
      }

      return (
        <ChannelIndexItem
          channel={ channel }
          key={ i }
          item_callback={ () => this._onClick(i) }
          button_callback={ (e) => this._leaveChannel(e, i)}
          selected={ selected }
          modal={ this.props.modal } />
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
