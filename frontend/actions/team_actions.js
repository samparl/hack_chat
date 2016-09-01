const ApiUtil = require('../util/api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const TeamConstants = require('../constants/team_constants');

const TeamActions = {
  fetchTeamId(name) {
    ApiUtil.fetchTeamId(name, TeamActions.receiveTeam);
  },

  fetchTeamName(id) {
    ApiUtil.fetchTeamName(id, TeamActions.receiveTeam);
  },

  receiveTeamId(response) {
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAM_ID_RECEIVED,
      id: response.id,
      name: response.name
    });
  },

  receiveTeam(response) {
    AppDispatcher.dispatch({
      actionType: TeamConstants.TEAM_ID_RECEIVED,
      id: response.id,
      name: response.name
    });
  }
};

module.exports = TeamActions;
