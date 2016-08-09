const React = require('react');
const ContentHeader = require('./content_header');
const MessagesDisplay = require('./messages_display');

module.exports = React.createClass({
  render() {
    return(
      <div className="content-pane">
        <ContentHeader />
        <MessagesDisplay />
      </div>
    );
  }
});
