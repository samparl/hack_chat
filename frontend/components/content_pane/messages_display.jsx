const React = require('react');
const MessageActions = require('../../actions/message_actions');
const MessageStore = require('../../stores/message_store');
const ChannelStore = require('../../stores/channel_store');

module.exports = React.createClass({
  getInitialState() {
    return({
      channel: ChannelStore.currentChannel(),
      messages: MessageStore.messages()
    });
  },

  componentDidMount() {
    this.messagesListener = MessageStore.addListener(this._updateMessages);
    this.channelListener = ChannelStore.addListener(this._updateChannel);
    if(this.state.channel) MessageActions.fetchMessages(this.state.channel.id);
  },

  componentWillUnmount() {
    this.messagesListener.remove();
    this.channelListener.remove();
  },

  _updateMessages() {
    this.setState({
      messages: MessageStore.messages()
    });
  },

  _updateChannel() {
    // debugger
    this.setState({
      channel: ChannelStore.currentChannel()
    });
    if(ChannelStore.currentChannel()) MessageActions.fetchMessages(ChannelStore.currentChannel());
    // debugger
  },

  render() {
    // debugger
    return(
      <div className="messages-display">
        {
          this.state.messages.map(function(message) {
            return(
              <p>
                <label>{ message.author }: { message.body }</label>
              </p>
            );
          })
        }
      </div>
    );
  }
});
