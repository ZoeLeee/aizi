import React from 'react';
import ReactDOM from 'react-dom';
import { Button,TabBar } from 'antd-mobile';

import './style.less';
const data = Array(4).fill({
  icon: "",
  label: 'Grid',
  href: 'javascript:;'
})
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
       申请阻断药
      </div>
    );
  }

  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
          icon={null}
            title="申请阻断药"
            key="Life"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>
          <TabBar.Item
          icon={null}
            title="我要捐款"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
           <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>我要捐款</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));