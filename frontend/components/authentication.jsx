const React = require('react');
const SessionStore = require('../stores/sessions');
const Main = require('./main');
const UserForms = require('./user_forms');

module.exports = React.createClass({
  getInitialState() {
      return({
        status: SessionStore.isUserLoggedIn()
      });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({
      status: SessionStore.isUserLoggedIn()
    });
  },

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
