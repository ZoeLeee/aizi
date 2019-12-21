import React, { Component } from 'react'
import { Steps, List, Checkbox, Flex } from 'antd-mobile';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Questionnaire from '../questionnaire';
import ReveiverPaper from '../receivePaper';

const Step = Steps.Step;

const Style = {
  padding: "20px 10px",
  height: "100%"
}

export default class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
    document.title = "申请HIV试纸";
    console.log(props);
  }
  UNSAFE_componentWillReceiveProps(props) {
    if (props.location.pathname)
      this.updateCurrent(props.location.pathname);
  }
  componentDidMount() {
    if (this.props.location.pathname)
    this.updateCurrent(this.props.location.pathname);
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
          <Redirect exact from='/apply' to='/apply/1' />
          <Route exact path="/apply/1" component={Questionnaire} />
          <Route exact path="/apply/2" component={ReveiverPaper} />
          <Route exact path="/apply/3">
            <div>确认订单</div>
          </Route>
        </Switch>
      </div>
    )
  }
  updateCurrent(pathname) {
    let index = parseInt(pathname.split("/").pop());
    if (!isNaN(index))
      this.setState({
        current: index - 1
      })
  }
}
