import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './style.less';

const App = () => {
  return (
    <div className="test">
      Hello React!
      <Button>hello wechat</Button>;
    </div>
  )
 ;
};

ReactDOM.render(<App />, document.getElementById('app'));