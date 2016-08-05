const React = require('react');
const LeftNav = require('./left_nav/left_nav');
const ErrorActions = require('../actions/error_actions');
const ErrorStore = require('../stores/errors');


module.exports = React.createClass({

  render() {
    let errors = ErrorStore.errors.base;
    if(errors) {
      errors.forEach(function(error){
        alert(error);
      });
    }

    return(
      <div>
        <LeftNav />
      </div>
    );
  }
});
