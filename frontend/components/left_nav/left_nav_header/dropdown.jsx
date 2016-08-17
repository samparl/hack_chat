const React = require('react');
const SessionActions = require('../../../actions/session_actions');
const SessionStore = require('../../../stores/session_store');

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
    let image = SessionStore.currentUser().image_url;
    let name = SessionStore.currentUser().name;
    return(
      <div className="dropdown" onClick={ this._clickList }>
        <div className="content">
          <div className="user-info">
            <img src={ image } />
            <div className="user-name">
              <h3>{ name }</h3>
              <h4>{ `@${name}` }</h4>
            </div>
          </div>
          <ul>
            <li onClick={ SessionActions.logOut }>Log Out</li>
          </ul>
        </div>
      </div>
    );
  }
});
