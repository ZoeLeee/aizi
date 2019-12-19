import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.less';

export default class Check extends Component {
  constructor(props) {
    super(props);
    document.title="到店检测预约";
  }
  render() {
    return (
      <ul className="check">
        <li>
          <Link to="/checkTime">
            <label>门店-xx-xx</label>
            <p>广东省上海市青浦区盈港路453号港隆国际大厦822室</p>
          </Link>
        </li>
        <li>
          <Link to="/checkTime">
            <label>门店-xx-xx</label>
            <p>广东省上海市青浦区盈港路453号港隆国际大厦822室</p>
          </Link>
        </li>
        <li>
          <Link to="/checkTime">
            <label>门店-xx-xx</label>
            <p>广东省上海市青浦区盈港路453号港隆国际大厦822室</p>
          </Link>
        </li>
        <li>
          <Link to="/checkTime">
            <label>门店-xx-xx</label>
            <p>广东省上海市青浦区盈港路453号港隆国际大厦822室</p>
          </Link>
        </li>
      </ul>
    );
  }
}
