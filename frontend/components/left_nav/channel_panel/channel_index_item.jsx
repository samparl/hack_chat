const React = require('react');

module.exports = React.createClass({
  render() {
    let icon;
    let row;
    if(!this.props.modal) {
      icon = <button className="remove-channel" onClick={ this.props.button_callback }></button>;
    }
    else {
      icon = (
        <div className="channel-users-icon">
          { this.props.channel.member_info } users
        </div>
      );
      row = (
        <div className="row">
          <div>
            Created by { this.props.channel.author }
          </div>
        </div>
      );
    }

    return(
      <li
        onClick={ this.props.item_callback }
        className={ "channel-index-item"  + this.props.selected }>
        <div className="row">
          <div className="index-title">
            { this.props.channel.name }
          </div>
          { icon }
        </div>
        { row }
      </li>
    );
  }
});
