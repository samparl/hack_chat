const React = require('react');
const TeamActions = require('../../actions/team_actions');
const ExternalHeader = require('../external_header.jsx');
const hashHistory = require('react-router').hashHistory;

const EnterTeam = React.createClass({
  getInitialState() {
    return({
      name: ""
    });
  },

  _defaultTeam(e) {
    hashHistory.push("/team/1");
  },

  _handleName(e) {
    this.setState({
      name: e.target.value
    });
  },

  _onSubmit(e) {
    let name = this.state.name;
    e.preventDefault();
    if(name.length > 0) {
      TeamActions.fetchTeamId(name);
    }
  },

  render() {
    return(
      <div className="team-auth">

        <ExternalHeader />
        <div className="team-auth-body">
          <form className="enter-team" onSubmit={ this._onSubmit }>
            <div className="team-auth-row team-auth-title">Sign in to another team</div>
            <div className="team-auth-row">Enter your team&#39;s hack domain
              (<a className="auth-link" onClick={ this._defaultTeam }>
                Guest
              </a>)
            </div>
            <div className="team-auth-row">
              <input
              type="text"
              placeholder="teamdomain"
              className="team-input"
              onChange={ this._handleName }
              /> .slack.com
            </div>
            <div className="team-auth-row">
              <input type="submit" value="Continue"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = EnterTeam;
