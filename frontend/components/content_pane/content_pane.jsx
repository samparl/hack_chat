const React = require('react');
const ContentHeader = require('./content_header');
const ContentFooter = require('./content_footer');
const MessagesDisplay = require('./messages_display');
const ChannelStore = require('../../stores/channel_store');

module.exports = React.createClass({
  getInitialState() {
    return({
      channel: ChannelStore.currentChannel()
    });
  },

  componentDidMount() {
    this.channelListener = ChannelStore.addListener(this._updateChannel);
  },

  componentWillUnmount() {
    this.channelListener.remove();
  },

  _updateChannel() {
    this.setState({
      channel: ChannelStore.currentChannel()
    });
  },

  render() {

    if(!this.state.channel) return <div className="content-pane"></div>;

    return(
      <div className="content-pane">
        <ContentHeader channel={ this.state.channel } />
        <MessagesDisplay channel={ this.state.channel } />
        <ContentFooter channel={ this.state.channel } />
      </div>
    );
  }
});
