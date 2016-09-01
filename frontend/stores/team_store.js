const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const TeamConstants = require('../constants/team_constants');
const hashHistory = require('react-router').hashHistory;

var team = null;

const TeamStore = new Store(AppDispatcher);

TeamStore.redirectToSignIn = function(team) {
  hashHistory.push(`team/${ team }`);
};

const setTeamName = function(name) {
  // debugger
  team = name;
};

TeamStore.name = function() {
  return team;
};

TeamStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TeamConstants.TEAM_ID_RECEIVED:
        setTeamName(payload.name);
        this.redirectToSignIn(payload.id);
        this.__emitChange();
      break;
    default:
  }
};

module.exports = TeamStore;
