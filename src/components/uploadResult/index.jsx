import React, { Component } from 'react';
import { Icon } from 'antd-mobile';


export default class UploadResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="masking">
        <div>
          <Icon type="check-circle" size="lg" color="#13CC96" style={{width:80,height:80}} />
          </div>
        上传成功
        <div style={{color:"#999999"}}>
          <p>结构为阴性，恭喜您！</p>
          <p>请放心，我们会保护您的个人隐私</p>
        </div>
      </div>
    );
  }
}
