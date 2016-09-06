const React = require('react');
const MessageActions = require('../../actions/message_actions');
const MessageStore = require('../../stores/message_store');
const ChannelStore = require('../../stores/channel_store');
const Message = require('./message');
const MessageInput = require('./message_input');

module.exports = React.createClass({
  getInitialState() {
    return({
      messages: MessageStore.messages(),
      scroll: 0
    });
  },

  componentDidMount() {
    this.refs.messages.addEventListener('scroll', this._handleScroll);
    this.messagesListener = MessageStore.addListener(this._updateMessages);
    this._setWebSocket(this.props.channel);
    if(this.props.channel) MessageActions.fetchMessages(this.props.channel.id);
  },

  componentWillUnmount() {
    this.messagesListener.remove();
    this.channel.unsubscribe(`${this.props.channel.id}`);
  },

  componentWillReceiveProps(newProps) {
    if(newProps.channel && newProps.channel !== this.props.channel) {
      this._setWebSocket(newProps.channel);
      MessageActions.fetchMessages(newProps.channel.id);
    }
  },

  componentWillUpdate() {
    let node = this.refs.messages;
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  },

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      let node = this.refs.messages;
      node.scrollTop = node.scrollHeight;
    }
  },

  _setWebSocket(channel) {
    if(this.channel) this.channel.unsubscribe(`${this.props.channel.id}`);
    this.channel = pusher.subscribe(`${channel.id}`);
    this.channel.bind('new message', function(message) {
      MessageActions.newMessage(message);
    });
  },

  _handleScroll(e) {
    // console.log("working!");
    this.setState({
      scroll: this.refs.messages.scrollHeight
    });
    // this.refs.messages.scrollTop = this.refs.messages.scrollHeight + 1;
    // debugger
  },

  _updateMessages() {
    this.setState({
      messages: MessageStore.messages()
    });
  },

  render() {
    return(
      <div className="messages-display" ref="messages">
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
