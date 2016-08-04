const React = require('react');
const SessionActions = require('../../../actions/session_actions');

const LeftHeader = React.createClass({
  render() {
    return(
      <div className="left-header">
        <h3>Team Header</h3>
        <button value="Log Out" onClick={ SessionActions.logOut }>Log Out</button>
      </div>
    );
  }
});

module.exports = LeftHeader;
