const React = require('react');
const ChannelIndex = require('./channel_index');
const LeftHeader = require('./left_nav_header');

module.exports = React.createClass({

  render() {
    return(
      <div className='left-nav'>
        <LeftHeader />
        <ChannelIndex />
      </div>
    );
  }

});
