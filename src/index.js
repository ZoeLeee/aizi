import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Tab, TabBarItem, SearchBar,Grids } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './style.less';
const data = Array(4).fill({
  icon: "",
  label: 'Grid',
  href: 'javascript:;'
})
const App = () => {
  return (
    <Tab type="tabbar">
      <TabBarItem label="申请阻断药">
        <SearchBar />
        <div>
          <div>
            申请HIV试纸
          </div>
          <div>
            申请HIV试纸
          </div>
          <div>
            申请HIV试纸
          </div>
          <div>
            申请HIV试纸1
          </div>
        </div>
      </TabBarItem>
      <TabBarItem label="我要捐款">
        我要捐款
      </TabBarItem>
    </Tab>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));