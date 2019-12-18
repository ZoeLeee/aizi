import React, { Component } from 'react';
import {ImagePicker, Button, Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';

import './index.less';

const Style={
  padding:20,
  height:"100%"
}

const TitleStyle={
  color:"#13CC96",
  fontSize:18,
  fontWeight:550
}

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state={
      files:[]
    }
  }
  render() {
    return (
      <div style={Style} className="upload">
        <span style={TitleStyle}>上传测试结果</span>
        <ImagePicker
          files={this.state.files}
          onChange={this.onChange}
          selectable={this.state.files.length===0}
          length={1}
        />
        <span>阴性</span>
        <div style={{height:100,background:"#14D393",margin:"20px 0"}}></div>
        <Button type="primary">
          <Link to="/uploadRes">确定上传</Link>
        </Button>
      </div>
    );
  }
  onChange = (files, type, index) => {
    this.setState({
      files,
    });
  }
}
