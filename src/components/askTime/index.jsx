import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import {Link} from 'react-router-dom';
import './index.less';

export default class AskTime extends Component {
  render() {
    return (
      <div className="ask-time flex-col">
        <div className="common-border info">美国德克萨斯州心理咨询师执照(license Number: 82365), 美国国家认证咨询师 NCC，中国国家二级心理咨询师、美国 Texas Counseling Association(TCA)会员。美国Southern Methodist University咨询心理学硕士。
接受多文化背景下的心理咨询师临床咨询理论与技术的系统训练。</div>
        <h4>预约时间</h4>
        <div className="select-time" style={{ flex: 1 }}>
          <div>
            <div>12</div>
            <div>五</div>
            <div className="full">已满</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div className="full">已满</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>
              10:00
              <p>-</p>
              10:50
            </div>
            <div>
              10:00
              <p>-</p>
              10:50
            </div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>
              10:00
              <p>-</p>
              10:50
            </div>
            <div>
              10:00
              <p>-</p>
              10:50
            </div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div>
              10:00
              <p>-</p>
              10:50
            </div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div className="full">已满</div>
          </div>
          <div>
            <div>12</div>
            <div>五</div>
            <div className="full">已满</div>
          </div>
        </div>
        <Button type="primary">
          <Link to="askPay">提交预约</Link>
        </Button>
      </div>
    )
  }
}
