import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from "../../images/1.png"

import './index.less'

export default class Ask extends Component {
  constructor(props){
    super(props);
    document.title="心理咨询预约";
  }
  render() {
    return (
      <ul className="ask-list">
        <li className="common-border">
          <Link to="askTime" className="flex">
            <div className="avatar"><img src={img} alt=""/></div>
            <div>
              <p>刘医生 ¥600/次</p>
              <div className="tags">
                <span>童年创伤</span>  
                <span>童年创伤</span>  
                <span>童年创伤</span>  
              </div>
              <p>国家二级咨询师 心理动力学取向 全职心理咨询师 高校兼职心理咨询</p>
            </div>
          </Link>
        </li>
      </ul>
    )
  }
}
