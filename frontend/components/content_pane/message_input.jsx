const React = require('react');
const MessageActions = require('../../actions/message_actions');

module.exports = React.createClass({
  getInitialState() {
    return({
      message: ""
    });
  },

  handleInput(e) {
    this.setState({
      message: e.target.value
    });
  },

  postMessage(e) {
    e.preventDefault();
    let message = {
      content: this.state.message,
      channel_id: this.props.channel.id
    };
    MessageActions.postMessage(message);
    // MessageActions.fetchMessages(this.props.channel.id);
    this.setState({
      message: ""
    });
  },

  render() {
    return(
      <form className="message-input-form" onSubmit={ this.postMessage }>
        <input type="text"
          onChange={ this.handleInput }
          className="message-input"
          value={ this.state.message } />
      </form>
    );
  }
});
