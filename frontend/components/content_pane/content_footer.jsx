const React = require('react');
const MessageInput = require('./message_input');

module.exports = React.createClass({
  render() {
    return(
      <div className="content-footer">
        <MessageInput channel={ this.props.channel }/>
      </div>
    );
  }
});
