const React = require('react');

module.exports = React.createClass({
  render() {
    let button;
    if(!this.props.modal) {
      button = <button className="remove-channel" onClick={ this.props.button_callback }></button>;
    }

    return(
      <li
        onClick={ this.props.item_callback }
        className={ "channel-index-item"  + this.props.selected }>
        { this.props.channel.title }
        { button }
      </li>
    );
  }
});
