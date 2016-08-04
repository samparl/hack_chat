const React = require('react');
const ChannelIndex = require('./channel_panel/channel_index');
const ChannelPanel = require('./channel_panel/panel');
const LeftHeader = require('./header/left_nav_header');

module.exports = React.createClass({

  render() {
    return(
      <div className='left-nav'>
        <LeftHeader />
        <ChannelPanel />
      </div>
    );
  }

});
