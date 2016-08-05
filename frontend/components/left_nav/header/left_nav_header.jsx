const React = require('react');
const SessionActions = require('../../../actions/session_actions');
const Dropdown = require('./dropdown.jsx');

const LeftHeader = React.createClass({
  getInitialState() {
    return({
      dropdown: false
    });
  },

  // _stopClick(e) {
  //   e.stopPropagation();
  // },

  openDropdown(e) {
    e.preventDefault();
    if(!this.state.dropdown) {
      e.stopPropagation();
      this.setState({
        dropdown: true
      });
    }
    this.dropDownListener = window.addEventListener("click", this.closeDropdown);
    // debugger
  },

  closeDropdown(e) {
    e.preventDefault();
    // debugger
    if(this.state.dropdown) {
      window.removeEventListener("click", this.closeDropdown);

      this.setState({
        dropdown: false
      });
    }

    return false;
  },

  render() {
    let dropdown;
    // debugger
    if(this.state.dropdown) {
      dropdown = <Dropdown />;
    }

    return(
      <div className="left-header" onClick={ this.openDropdown }>
        <h3 className="team">Team Header &#9660;</h3>
        { dropdown }
      </div>
    );
  }
});

module.exports = LeftHeader;
