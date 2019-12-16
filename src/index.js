import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/index';
import Apply from './components/apply/index';
import Ask from './components/ask/index';
import Upload from './components/upload/index';
import Check from './components/check/index';

import './style.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/apply">
            <Apply />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/check">
            <Check />
          </Route>
          <Route path="/ask">
            <Ask />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));