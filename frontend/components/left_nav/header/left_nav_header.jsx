const React = require('react');
const SessionActions = require('../../../actions/session_actions');
const Dropdown = require('./dropdown.jsx');
const SessionStore = require('../../../stores/sessions');

const LeftHeader = React.createClass({
  getInitialState() {
    return({
      dropdown: false
    });
  },

  componentWillUnmount() {
    window.removeEventListener("click", this.closeDropdown);
  },

  openDropdown(e) {
    e.preventDefault();
    if(!this.state.dropdown) {
      e.stopPropagation();
      this.setState({
        dropdown: true
      });
    }
    window.addEventListener("click", this.closeDropdown);
  },

  closeDropdown(e) {
    e.preventDefault();
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
    if(this.state.dropdown) {
      dropdown = <Dropdown />;
    }

    return(
      <div className="left-header" onClick={ this.openDropdown }>
        <h3 className="team">Team Header &#9660;</h3>
        <h3 className="user">{SessionStore.currentUser().email}</h3>
        { dropdown }
      </div>
    );
  }
});

module.exports = LeftHeader;
