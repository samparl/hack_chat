const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <div className="message">
        { this.props.message.author }: { this.props.message.body }
      </div>
    );
  }
});
