import React, { Component } from 'react';
import { Icon } from 'antd-mobile';


export default class UploadResult extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.match.params.type
  }
  renderInfo() {
    if(this.type==="3")
    return (
      <div>
        <div className="common-border">
          <h3>关于我们</h3>
          上海青艾健康促进中心是由一群热衷于社会公益事业、以服务青年性少数群体为己任的大学生自发成立的专业5A级社会组织。中心成立于2008年，于2010年3月注册于静安区民政局。中心主要为上海地区青年性少数群体提供性安全宣传教育，包含性病艾滋病动员检测、专业培训、学术交流、心理咨询等服务。
        </div>
        <div className="common-border">
          <h3>我们的宗旨</h3>
          青艾心理友善咨询特色HIV、LGBT-friendly
        </div>
      </div>
    )
  }
  render() {
    let t1 = "";
    let t2 = "";
    let t3 = "";

    switch (this.type) {
      case "1":
        t1 = "上传成功";
        t2 = "结果为阴性，恭喜您！";
        t3 = "请放心，我们会保护您的个人隐私";
        break;
      case "2":
        t1 = "预约成功";
        t2 = "稍后检测所需的相关信息将会发！";
        t3 = "送到你的手机上";
        break;
      case "3":
        t1 = "预约成功";
        t2 = "稍后检测所需的相关信息将会发！";
        t3 = "送到你的手机上";
        break;
      default:
        break;
    }

    return (
      <div className="masking">
        <div>
          <Icon type="check-circle" size="lg" color="#13CC96" style={{ width: 80, height: 80 }} />
        </div>
        {t1}
        <div style={{ color: "#999999" }}>
          <p>{t2}</p>
          <p>{t3}</p>
        </div>
        {
         this.renderInfo()
        }
      </div>
    );
  }
}
