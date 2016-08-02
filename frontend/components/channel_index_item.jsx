const React = require('react');

module.exports = React.createClass({
  render() {
    // debugger
    return(
      <li className="channel-index">{this.props.channel.title}</li>
    );
  }
});
