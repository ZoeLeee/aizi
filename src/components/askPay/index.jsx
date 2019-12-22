import React, { Component } from 'react'
import { Button, List, InputItem, Picker, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';

import './index.less';

export default class AskPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }
  render() {
    return (
      <div className="ask-pay flex-col">
        <div className="common-border info">
          <div>
            <span>咨询师:</span>
            <span>刘医生</span>
          </div>
          <div>
            <span>时间:</span>
            <span>2019/11/2   14:50-15:40</span>
          </div>
          <div>
            <span>费用:</span>
            <span>600元</span>
          </div>
          <div>
            <span>咨询方式:</span>
            <span>当面咨询</span>
          </div>
        </div>
        <List style={{ flex: 1 }}>
          <InputItem
            clear
            placeholder="输入姓名"
          >姓名*</InputItem>
          <InputItem
            type="phone"
            clear
            placeholder="输入手机"
          >手机*</InputItem>
          <List.Item>
            <div>性别:</div>
            <div className="sex">
              <input type="radio" id="man"
                name="sex" value="email" />
              <label for="man">男</label>
              <input type="radio" id="women"
                name="sex" value="phone" />
              <label for="women">女</label>
              <input type="radio" id="other"
                name="sex" value="mail" />
              <label for="other">其他</label>
            </div>
          </List.Item>
          <Picker data={[{ label: "男", value: "0" }, { label: "女", value: "1" }]}>
            <List.Item arrow="horizontal">性取向:</List.Item>
          </Picker>
        </List>
        {
          this.state.isShow &&
          <div className="confirm-pay">
            <div className="flex-col">
              <div className="flex-between header">
                <Icon 
                  type="cross" 
                  color="#14D393" 
                  style={{ width: 30, height: 30 }} 
                  onClick={()=>this.setState({isShow:false})}
                  />
                <span>确定付款</span>
                <span className="qusition">?</span>
              </div>
              <div style={{ flex: 1 }}>
                <h4>¥600元</h4>
                <List style={{ flex: 1 }}>
                  <InputItem
                    style={{ textAlign: "right" }}
                    value="123446785"
                    clear
                  >支付宝账号</InputItem>
                  <Picker
                    value="0"
                    data={[{ label: "花呗", value: "0" }, { label: "余额宝", value: "1" }]}>
                    <List.Item arrow="horizontal">付款方式:</List.Item>
                  </Picker>
                </List>
              </div>
              <Button type="primary">
                <Link to="uploadRes/3">确认并付款</Link>
              </Button>
            </div>
          </div>
        }
        <Button type="primary" onClick={()=>this.setState({isShow:true})}>确认并付款</Button>
      </div>
    )
  }
}
