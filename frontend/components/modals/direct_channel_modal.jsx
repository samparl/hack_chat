const React = require('react');
const Modal = require('./modal');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const ModalActions = require('../../actions/modal_actions');
const ChannelIndex = require('../left_nav/channel_panel/channel_index');
const ChannelActions = require('../../actions/channel_actions');

module.exports = React.createClass({
  getInitialState() {
    return({
      users: UserStore.users(),
    });
  },

  componentDidMount() {
    UserActions.fetchUsers();
    UserStore.addListener(this._onChange);
  },

  _onChange() {
    this.setState({
      users: UserStore.users(),
    });
  },

  closeModal() {
    ModalActions.removeModal();
  },

  render(){
    // debugger
    let contents = (
      <div className="channel-modal">
        <div className="modal-header">
          <div className="circle-button" onClick={ this.closeModal }>
            <div className="icon">esc</div>
          </div>

        </div>
        <div className="channel-block">
          <h2>Direct Messages</h2>
          <h5>Recent conversations</h5>
          <div className="modal-list">

            <ChannelIndex
              channels={ this.state.users }
              callback={ ChannelActions.directChannel }
              modal="true" />
          </div>
        </div>
      </div>
    );

    return(
      <Modal contents={ contents } />
    );
  }
});
