import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Calendar,Button,ActionSheet} from 'antd-mobile';
import './index.less';

export default class CheckTime extends Component {
  constructor(props) {
    super(props);
    document.title = "到店检测预约";
  }
  render() {

    return (
      <div className="check-time">
        <div className="common-boarder">
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
        <div className="select-time">
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
        <Button type="primary" onClick={this.showActionSheet}>提交预约</Button>
      </div>);
  }
  showActionSheet = () => {
 
  }
};
