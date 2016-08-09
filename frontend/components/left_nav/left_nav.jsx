const React = require('react');
const SubscribedChannelIndex = require('./channel_panel/subscribed_channel_index');
const ChannelPanel = require('./channel_panel/panel');
const LeftHeader = require('./left_nav_header/left_nav_header');

module.exports = React.createClass({
  // getInitialState() {
  //   return({
  //     channels: []
  //   });
  // },
  //
  // _onChange() {
  //   this.setState({
  //     channels: ChannelStore.subscribed()
  //   });
  // },
  //
  // openChannelModal() {
  //   ModalActions.displayModal(ChannelModal);
  // },
  //
  // componentDidMount() {
  //   ChannelActions.fetchChannels();
  //   this.channelsListener = ChannelStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount() {
  //   this.channelsListener.remove();
  // },

  render() {
    return(
      <div className='left-nav'>
        <LeftHeader />
        <ChannelPanel />
      </div>
    );
  }

});
