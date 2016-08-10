const React = require('react');

module.exports = React.createClass({
  render() {

    let title;
    if(this.props.channel) title = this.props.channel.title;

    return(
      <div className="content-header">
        { title }
      </div>
    );
  }
});
