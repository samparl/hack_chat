const React = require('react');
const SessionActions = require('../../../actions/session_actions');
const SessionStore = require('../../../store/session_store');

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
    let name = SessionStore.currentUser().title;
    return(
      <div className="dropdown" onClick={ this._clickList }>
        <div>
          <div>
            <img src={ image } />
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <ul>
          <li onClick={ SessionActions.logOut }>Log Out</li>
        </ul>
      </div>
    );
  }
});
