import React, { Component } from 'react';
import { Steps, List, Checkbox, Flex, Radio, Button } from 'antd-mobile';
import {
  Link,
} from "react-router-dom";

import './index.less';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

export default class Questionnaire extends Component {
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (
      <>
        <div className="questionnaire">
          <List renderHeader={() => '从哪里得知消息'}>
            {data.map(i => (
              <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </CheckboxItem>
            ))}
            <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
              Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
            </CheckboxItem>
          </List>
          <List renderHeader={() => '从哪里得知消息'}>
            {data.map(i => (
              <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </CheckboxItem>
            ))}
            <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
              Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
            </CheckboxItem>
          </List>

        </div>
        <div style={{ height: 100 }}>
          <CheckboxItem >
            我已经阅读并同意《知情同意书》
        </CheckboxItem>
          <Button type="primary">
            <Link to="/apply/2">提交信息</Link>
          </Button>
        </div>
      </>
    )
  }
}
