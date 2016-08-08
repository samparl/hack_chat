const SubscribedChannelIndex = require('./subscribed_channel_index');
const ChannelTitle = require('./channel_title');
const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <div className="panel-content">
        <ChannelTitle />
        <SubscribedChannelIndex />
      </div>
    );
  }

});
