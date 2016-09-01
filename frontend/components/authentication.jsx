const React = require('react');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;
const Main = require('./main');
const UserForms = require('./user_forms');

module.exports = React.createClass({

  render() {
    let page;
    if(this.state.status) {
      page = <Main />;
    } else {
      page = <UserForms />;
    }
    return (
      <div>
        { page }
      </div>
    );
  }
});
