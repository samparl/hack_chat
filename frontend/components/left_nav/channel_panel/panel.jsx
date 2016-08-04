const ChannelIndex = require('./channel_index');
const ChannelTitle = require('./channel_title');
const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <div className="channel-panel">
        <ChannelTitle />
        <ChannelIndex />
      </div>
    );
  }

});
