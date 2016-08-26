const React = require('react'),
      LeftNav = require('./left_nav/left_nav'),
      ContentPane = require('./content_pane/content_pane'),
      ErrorActions = require('../actions/error_actions'),
      ErrorStore = require('../stores/error_store'),
      SessionStore = require('../stores/session_store'),
      hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  // getInitialState() {
  //     return({
  //       status: SessionStore.isUserLoggedIn()
  //     });
  // },
  //
  // componentDidMount() {
  //   this.sessionListener = SessionStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount() {
  //   this.sessionListener.remove();
  // },
  //
  // _onChange() {
  //   this.setState({
  //     status: SessionStore.isUserLoggedIn()
  //   });
  //   hashHistory.push('/');
  // },

  render() {
    let errors = ErrorStore.errors.base;
    if(errors) {
      errors.forEach(function(error){
        alert(error);
      });
    }

    return(
      <div className="main-screen">
        <LeftNav />
        <ContentPane />
      </div>
    );
  }
});
