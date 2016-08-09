const React = require('react');
const LeftNav = require('./left_nav/left_nav');
const ContentPane = require('./content_pane/content_pane');
const ErrorActions = require('../actions/error_actions');
const ErrorStore = require('../stores/error_store');


module.exports = React.createClass({

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
