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
    let username = SessionStore.currentUser().username;
    return(
      <div className="dropdown" onClick={ this._clickList }>
        <div className="content">
          <div className="section">
            <img src={ image } className="thumbnail1" />
            <div className="info">
              <h3>{ username }</h3>
              <h4>{ `@${username}` }</h4>
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
