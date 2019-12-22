import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Button, List, InputItem } from 'antd-mobile';
import './index.less';

export default class CheckTime extends Component {
  constructor(props) {
    super(props);
    document.title = "到店检测预约";
    this.state={
      isShow:false
    }
  }
  render() {
    return (
      <div className="check-time flex-col">
        <div className="common-border">
          <p>青艾青浦检测点</p>
          <div>
            <p>门店地址</p>
            <p>上海市青浦区盈港路453号港隆国际大厦822室 复制</p>
          </div>
          <div>
            <p>工作时间：</p>
            <p>工作日 10:00 - 17:30</p>
          </div>
          <div>
            <p>收费标准：</p>
            <p>已预约 20/次</p>
            <p>未预约 100/次 </p>
          </div>
        </div>
        <h4>预约时间</h4>
        <div className="select-time" style={{ flex: 1 }}>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>上午</div>
            <div>下午</div>
          </div>
        </div>
        <div className="action-modal"  style={{
            display:this.state.isShow?"block":"none",
            height:this.state.isShow?380:0
          }}>
          <Button icon="cross"  onClick={this.hideActionSheet}></Button>
          <div className="common-border info">
            <p>检测地点:</p>
            <div>上海市青浦区盈港路453号港隆国际大厦822室</div>
            <p>检测时间:</p>
            <div>2019 年 12 月 12 日 上午</div>
          </div>
          <List >
            <InputItem
              clear
              placeholder="输入姓名"
            >姓名</InputItem>
            <InputItem
              type="phone"
              clear
              placeholder="输入手机"
            >手机</InputItem>
          </List>
          <Button type="primary">
            <Link to="/uploadRes/2">确定预约</Link>
          </Button>
        </div>
        <Button type="primary" onClick={this.showActionSheet}>提交预约</Button>
      </div>);
  }
  showActionSheet=()=>{
    this.setState({
      isShow:true
    })
  }
  hideActionSheet=()=>{
    this.setState({
      isShow:false
    })
  }
};
