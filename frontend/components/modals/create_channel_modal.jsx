const React = require('react');
const Modal = require('./modal');
// const ChannelStore = require('../../stores/channel_store');
const ModalActions = require('../../actions/modal_actions');
// const ChannelIndex = require('../left_nav/channel_panel/channel_index');
const ChannelActions = require('../../actions/channel_actions');

module.exports = React.createClass({
  getInitialState() {
    return({
      title: "",
      description: ""
    });
  },

  // componentDidMount() {
  //   this.setState({
  //     title: "",
  //     description: ""
  //   });
  // },

  closeModal() {
    ModalActions.removeModal();
  },

  _handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  },

  _handleDescription(e) {
    this.setState({
      descripton: e.target.value
    });
  },

  _onSubmit(e) {
    e.preventDefault();
    ChannelActions.createChannel({
      channel: this.state
    });
  },

  render(){

    let contents = (
      <div className="channel-modal">
        <div className="modal-header">

          <div className="circle-button" onClick={ this.closeModal }>
            <div className="close" />
            <p>
              esc
            </p>
          </div>

          <h2 className="h-center">Add a channel</h2>

        </div>

        <div className="channel-block h-center">

          <h3>Channels you can join</h3>

          <form onSubmit={ this._onSubmit } className="create-channel">
            <input value={ this.state.title } />
            <input value={ this.state.description } />
          </form>

        </div>
      </div>
    );

    return(
      <Modal contents={ contents } />
    );
  }
});
