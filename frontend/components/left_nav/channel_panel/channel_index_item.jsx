const React = require('react');

module.exports = React.createClass({
  render() {

    let icon,
        row,
        title,
        name;

    if(this.props.direct === "true") {
      title = this.props.channel.username;
    } else {
      title = this.props.channel.name;
    }

    if(!this.props.modal) {
      icon = <button className="remove-channel" onClick={ this.props.button_callback }></button>;
    }
    else  {
      if(this.props.direct === 'false') {
        row = (
          <div className="row">
            <div>
              Created by { this.props.channel.author }
            </div>
          </div>
        );

        icon = (
          <div className="channel-users-icon">
            { this.props.channel.member_info } users
          </div>
        );
      }

      if(this.props.direct === "true") {
        name = <div className="user-name">
          { this.props.channel.name }
        </div>;
      }
    }

    return(
      <li
        onClick={ this.props.item_callback }
        className={ "channel-index-item"  + this.props.selected }>
        <div className="row">
          <div className="index-title">
            { title }
            { name }
          </div>
          { icon }
        </div>
        { row }
      </li>
    );
  }
});
