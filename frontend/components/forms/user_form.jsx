const React = require('react');
const ErrorStore = require('../../stores/errors');
const ErrorActions = require('../../actions/error_actions');

module.exports = React.createClass({
  getInitialState() {
    return({
      email: "",
      password: "",
      errors: {}
    });
  },


  // componentWillMount() {
  //   ErrorActions.clearErrors();
  // },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    setTimeout(function () {
      ErrorActions.clearErrors();
    }, 0);
    this.errorListener.remove();
  },

  _onChange() {
    this.setState({
      errors: ErrorStore.errors(this.props.form)
    });
  },

  _handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  },

  _handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  },

  _onSubmit(e) {
    e.preventDefault();
    this.props.callback({
      email: this.state.email,
      password: this.state.password
    });
  },

  render() {
    let base_errors = this.state.errors.base;

    if (base_errors) {
      base_errors = base_errors.map(function(error, i) {
        return <li key={ i }>{error}</li>;
      });
    } else {
      base_errors = [];
    }

    let email_errors = this.state.errors.email;

    if (email_errors) {
      email_errors = email_errors.map(function(error, i) {
        return <li key={ i }>`Email ${error}`</li>;
      });
    } else {
      email_errors = [];
    }

    let password_errors = this.state.errors.password;
    if (password_errors) {
      password_errors = this.state.errors.password.map(function(error, i) {
        return <li key={ i }>`Password ${error}`</li>;
      });
    } else {
      password_errors = [];
    }

    return(
      <div>
        <ul>
          { base_errors }
        </ul>
        <form onSubmit={ this._onSubmit }>
          <ul>
            { email_errors }
          </ul>
          <input
            type="text"
            placeholder="you@domain.com"
            onChange={ this._handleEmail }
            className="auth-input" />
          <br></br>
          <ul>
            { password_errors }
          </ul>
          <input
            type="password"
            placeholder="password"
            onChange={ this._handlePassword }
            className="auth-input"/>
        <input type="submit" value={ this.props.form } className="auth-input" />
        </form>
      </div>
    );
  }
});
