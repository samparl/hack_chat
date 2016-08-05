const React = require('react');
const ModalStore = require('../stores/modals');

module.exports = React.createClass({
  getInitialState(){
    return({
      modal: undefined
    });
  },

  componentDidMount(){
    this.modalListener = ModalStore.addListener(this.setModal);
  },

  setModal() {
    this.setState({
      modal: ModalStore.modal()
    });
  },

  render() {

    let component;
    if(this.state.modal) {
      component = <this.state.modal />;
    }

    return(
      <div>
        { component }
      </div>
    );
  }

});
