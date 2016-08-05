const React = require('react');

module.exports = React.createClass({
  getInitialState() {
    return ({
      openState: false
    });
  },

  render() {
    return(
      <div className="modal">
        <div className="modal-content">
          { this.props.content }
        </div>
      </div>
    );
  }
});
