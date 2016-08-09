const React = require('react');
const SessionActions = require('../../../actions/session_actions');

module.exports = React.createClass({

  getInitialState() {
    return({
      dropdown: true
    });
  },

  _clickList(e) {
      e.stopPropagation();
  },

  _buttonCallback() {
    SessionActions.logOut();
  },

  render() {

    return(
      <ul className="dropdown logout" onClick={ this._clickList }>
        <li onClick={ SessionActions.logOut }>Log Out</li>
      </ul>
    );
  }
});
