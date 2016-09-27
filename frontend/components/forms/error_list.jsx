const React = require('react');

module.exports = React.createClass({
  render(){
    return(
      <ul>
        {
          this.props.errors.map(function(error, i) {
            let errorType = this.props.errorType;
            if(errorType) {
              errorType = errorType[0].toUpperCase() + errorType.slice(1);
            }
            return <li key={ i }>{ errorType } { error }</li>;
          }.bind(this))
        }
      </ul>
    );
  }
});
