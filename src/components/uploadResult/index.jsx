import React, { Component } from 'react';
import { Icon } from 'antd-mobile';


export default class UploadResult extends Component {
  constructor(props) {
    super(props);
    this.type=this.props.match.params.type
  }
  render() {
    let t1="";
    let t2="";
    let t3="";

    switch(this.type){
      case "1":
        t1="上传成功";
        t2="结果为阴性，恭喜您！";
        t3="请放心，我们会保护您的个人隐私";
        break;
      case "2":
        t1="预约成功";
        t2="稍后检测所需的相关信息将会发！";
        t3="送到你的手机上";
        break;
      default:
        break;
    }

    return (
      <div className="masking">
        <div>
          <Icon type="check-circle" size="lg" color="#13CC96" style={{width:80,height:80}} />
          </div>
        {t1}
        <div style={{color:"#999999"}}>
          <p>{t2}</p>
          <p>{t3}</p>
        </div>
      </div>
    );
  }
}
