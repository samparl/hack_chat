const React = require('react');

const LeftHeader = React.createClass({
  render() {
    return(
      <div className="left-header">
        Team Header <br />
      <button value="Log Out">Log Out</button>
      </div>
    );
  }
});

module.exports = LeftHeader;
