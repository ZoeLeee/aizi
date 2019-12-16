import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import { Steps, List, Checkbox, Flex } from 'antd-mobile';
import {
  Switch,
  Route,
} from "react-router-dom";
import Questionnaire from '../questionnaire';

const Step = Steps.Step;

const Style = {
  padding: "20px 10px"
}

@hot
export default class Apply extends Component {
  constructor(){
    super();
    this.state={
      current:0
    }
  }
  componentWillReceiveProps(props){
    console.log(props);
  }
  render() {
    return (
      <div style={Style} className="flex-col">
        <Steps direction="horizontal" current={this.state.current} style={{ height: 60 }}>
          <Step title="相关调查" />
          <Step title="领取试纸" />
          <Step title="确认订单" />
        </Steps>
        <Switch>
          <Route exact path="/apply/2">
            <div>2</div>
          </Route>
          <Route exact path="/apply/3">
            <div>3</div>
          </Route>
          <Route exact path="/apply">
            <Questionnaire />
          </Route>
        </Switch>
      </div>
    )
  }
}
