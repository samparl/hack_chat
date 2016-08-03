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
    setTimeout(function () {
      ErrorActions.clearErrors();
    }, 0);
    this.errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount() {
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
          <label>Email<br></br>
            <input type="text" onChange={ this._handleEmail }/>
          </label>
          <br></br>
          <ul>
            { password_errors }
          </ul>
          <label>Password<br></br>
            <input type="password" onChange={ this._handlePassword }/>
          </label><br></br>
          <input type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
});
