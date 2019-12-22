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
import UploadResult from './components/uploadResult/index';
import CheckTime from './components/checkTime/index';
import './style.less';

import { hot } from 'react-hot-loader/root'
import AskTime from './components/askTime';
import AskPay from './components/askPay';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router basename={location.host.includes("github")?"aizi/":""}>
        <Switch>
          <Route path="/apply" component={Apply} />
          <Route path="/upload" component={Upload} />
          <Route path="/uploadRes/:type" component={UploadResult} />
          <Route path="/check" component={Check} />
          <Route path="/checkTime" component={CheckTime} />
          <Route path="/ask" component={Ask} />
          <Route path="/askTime" component={AskTime} />
          <Route path="/askPay" component={AskPay} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

const HotApp= hot(App);

ReactDOM.render(<HotApp />, document.getElementById('app'));