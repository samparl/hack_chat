const React = require('react');

module.exports = React.createClass({
  render() {

    let title;
    let count;
    if(this.props.channel) {
      title = this.props.channel.title;
      count = this.props.channel.member_count;
    }

    return(
      <div className="content-header">
        <div>{ title }</div>
        <div>{ count } members</div>
      </div>
    );
  }
});
