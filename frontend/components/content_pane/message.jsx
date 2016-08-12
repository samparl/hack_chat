const React = require('react');

module.exports = React.createClass({
  render() {
    // debugger
    let date = new Date(this.props.message.date);
    return(
      <div className="message">
        <img src={ this.props.message.image_url } />
        <div className="message-content">
          <div className="message-data">
            <div className="message-author">
              { this.props.message.author }
            </div>
            <div className="message-date">
              { date.toLocaleTimeString() }
            </div>
          </div>
          <div className="message-body">
            { this.props.message.body }
          </div>
        </div>
      </div>
    );
  }
});
