const React = require('react');

module.exports = React.createClass({
  render() {

    let title;
    let count;

    if(this.props.channel) {
      title = this.props.channel.name;
      count = this.props.channel.member_info;
    }

    return(
      <div className="content-header">
        <h3>{ title }</h3>
        <h4>{ count } members</h4>
      </div>
    );
  }
});
