const React = require('react');
const SessionStore = require('../../stores/session_store');

module.exports = React.createClass({
  render() {

    let title;
    let count;
    let info;
    let channel = this.props.channel;
    if(channel) {
      title = channel.name;
      if(channel.direct){
        info = SessionStore.currentUser().name;
      } else {
        info = `${ channel.member_info } members`;
      }
    }

    return(
      <div className="content-header">
        <h3>{ title }</h3>
        <h4>{ info }</h4>
      </div>
    );
  }
});
