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
    if(this.props.channel) MessageActions.fetchMessages(this.props.channel.id);
  },

  componentWillUnmount() {
    this.messagesListener.remove();
  },

  componentWillReceiveProps(newProps) {
    if(newProps.channel) MessageActions.fetchMessages(newProps.channel.id);
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
        <MessageInput channel={ this.props.channel }/>
      </div>
    );
  }
});
