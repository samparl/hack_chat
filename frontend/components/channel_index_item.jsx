const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <li className="channel-index-item">{this.props.channel.title}</li>
    );
  }
});
