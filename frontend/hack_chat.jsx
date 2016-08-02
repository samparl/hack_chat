import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      ChannelIndex = require('./components/channel_index.jsx'),
      ChannelStore = require('./stores/channels'),
      ChannelActions = require('./actions/channel_actions'),
      ChannelShow = require('./components/channel_show.jsx');

window.ChannelStore = ChannelStore;

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>TrajanChat</h1>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ChannelIndex} />
    <Route path="channels" component={ChannelIndex} />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Router history={ hashHistory } routes={ routes } />, root);
});
