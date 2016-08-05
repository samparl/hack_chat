const React = require('react');

module.exports = React.createClass({
  // getInitialState() {
  //   return ({
  //     openState: false
  //   });
  // },
  //
  // openModal() {
  //   this.setState({
  //     openState: true
  //   });
  // },
  //
  // closeModal() {
  //   this.setState({
  //     openState: false
  //   });
  // },

  render() {
    // debugger
    return(
      <div className="modal">
        <div className="modal-box">
          { this.props.contents }
        </div>
      </div>
    );
  }
});
