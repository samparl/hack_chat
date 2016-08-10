const React = require('react');
const MessageActions = require('../../actions/message_actions');
const MessageStore = require('../../stores/message_store');
const ChannelStore = require('../../stores/channel_store');
const Message = require('./message');

module.exports = React.createClass({
  getInitialState() {
    return({
      // channel: ChannelStore.currentChannel(),
      messages: MessageStore.messages()
    });
  },

  componentDidMount() {
    this.messagesListener = MessageStore.addListener(this._updateMessages);
    // this.channelListener = ChannelStore.addListener(this._updateChannel);
    if(this.props.channel) MessageActions.fetchMessages(this.props.channel.id);
  },

  componentWillUnmount() {
    this.messagesListener.remove();
    // this.channelListener.remove();
  },

  _updateMessages() {
    this.setState({
      messages: MessageStore.messages()
    });
  },

  // _updateChannel() {
  //   this.setState({
  //     channel: ChannelStore.currentChannel()
  //   });
  //   if(ChannelStore.currentChannel()) MessageActions.fetchMessages(ChannelStore.currentChannel().id);
  // },

  render() {
    return(
      <div className="messages-display">
        {
          this.state.messages.map(function(message, key) {
            return(
              <Message key={ key } message={ message } />
            );
          })
        }
        <input className="message-input" />
      </div>
    );
  }
});
