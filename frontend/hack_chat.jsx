import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const React = require('react'),
      ReactDOM = require('react-dom'),
      IndexComponent = require('./components/index_component');

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
    <IndexRoute component={ IndexComponent } />
  </Route>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<Router history={ hashHistory } routes={ routes } />, root);
});
