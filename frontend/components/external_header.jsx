const React = require('react');

module.exports = React.createClass({
  render() {
    return(
      <div className="fixed header group">
        <div className="logo">HackChat</div>
        <button>Create a new team</button>
      </div>
    );
  }
});
