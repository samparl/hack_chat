const React = require('react');
const MessageActions = require('../../actions/message_actions');
const MessageStore = require('../../stores/message_store');
const ChannelStore = require('../../stores/channel_store');
const Message = require('./message');
const MessageInput = require('./message_input');

module.exports = React.createClass({
  getInitialState() {
    return({
      messages: MessageStore.messages()
    });
  },

  componentDidMount() {
    this.messagesListener = MessageStore.addListener(this._updateMessages);
    this._setWebSocket(this.props.channel);
    if(this.props.channel) MessageActions.fetchMessages(this.props.channel.id);
    console.log("old props channel id: " + this.props.channel.id);
  },

  componentWillUnmount() {
    this.messagesListener.remove();
    this.channel.unsubscribe(`${this.props.channel.id}`);
  },

  componentWillReceiveProps(newProps) {
    if(newProps.channel && newProps.channel !== this.props.channel) {
      this._setWebSocket(newProps.channel);
      MessageActions.fetchMessages(newProps.channel.id);
      console.log("new props channel id: " + newProps.channel.id);
    }
  },

  _setWebSocket(channel) {
    if(this.channel) this.channel.unsubscribe(`${this.props.channel.id}`);
    this.channel = pusher.subscribe(`${channel.id}`);
    this.channel.bind('new message', function(message) {
      MessageActions.newMessage(message);
    });
  },

  _updateMessages() {
    this.setState({
      messages: MessageStore.messages()
    });
  },

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
      </div>
    );
  }
});
