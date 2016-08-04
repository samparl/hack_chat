const React = require('react');
const SessionActions = require('../../../actions/session_actions');

module.exports = React.createClass({
  render() {
    return(
      <ul className="dropdown logout">
        <li><button onClick={ SessionActions.logOut }>Log Out</button></li>
      </ul>
    );
  }
});
