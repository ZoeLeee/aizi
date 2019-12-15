import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar, TabBar } from 'antd-mobile';

import './style.less';

const ContentStyle = {
  backgroundColor: 'white',
  height: '100%',
  textAlign: 'center',
};

class App extends React.Component {
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
          <div>申请HIV试纸</div>
          <div>申请HIV试纸</div>
          <div>申请HIV试纸</div>
          <div>申请HIV试纸</div>
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

ReactDOM.render(<App />, document.getElementById('app'));