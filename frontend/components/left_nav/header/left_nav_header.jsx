const React = require('react');
const SessionActions = require('../../../actions/session_actions');
const Dropdown = require('./dropdown.jsx');

const LeftHeader = React.createClass({
  render() {
    return(
      <div className="left-header">
        <h3 className="team">Team Header &#9660;</h3>
        <Dropdown />
      </div>
    );
  }
});

module.exports = LeftHeader;
