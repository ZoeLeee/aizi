import React from 'react';
import { SearchBar, TabBar } from 'antd-mobile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ContentStyle = {
  backgroundColor: 'white',
  height: '100%',
  textAlign: 'center',
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  renderContent() {
    return (
      <div style={ContentStyle}>
        <SearchBar placeholder="搜索" />
        <div className="home-icons">
          <div>
            <Link to="/apply">申请HIV试纸</Link>
          </div>
          <div>
            <Link to="/upload">上传测试结果</Link>
          </div>
          <div>
            <Link to="/check">预约到店检测</Link>
          </div>
          <div>
            <Link to="/ask">预约心理咨询</Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          tintColor="#fff"
          unselectedTintColor="#888888"
        >
          <TabBar.Item
            title="申请阻断药"
            selected={this.state.selectedTab === 0}
            onPress={() => {
              this.setState({
                selectedTab: 0,
              });
            }}
            data-seed={this.state.selectedTab === 0 ? "true" : ""}
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            title="我要捐款"
            selected={this.state.selectedTab === 1}
            onPress={() => {
              this.setState({
                selectedTab: 1,
              });
            }}
            data-seed={this.state.selectedTab === 1 ? "true" : ""}
          >
            <div style={ContentStyle}>我要捐款</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}