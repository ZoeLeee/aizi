import React, { Component } from 'react'
import { List, InputItem,Picker,TextareaItem,Button } from 'antd-mobile';
import {Link} from 'react-router-dom';

export default class ReveiverPaper extends Component {
  render() {
    return (
      <div>
        <List >
          <InputItem
            clear
            placeholder="auto focus"
          >姓名</InputItem>
          <InputItem
            type="phone"
            clear
            placeholder="click the button below to focus"
          >手机</InputItem>
          <Picker extra="请选择地址"
            data={[{
              value:0,
              label:"test"
            }]}
            title="Areas"
            onOk={e => console.log('ok', e)}
            onDismiss={e => console.log('dismiss', e)}
          >
            <List.Item arrow="horizontal">城市</List.Item>
          </Picker>
          <TextareaItem
            title="收货地址"
            autoHeight
            labelNumber={5}
            rows={3}
          />
        </List>
        <Button type="primary">
            <Link to="/apply/3">确认领取</Link>
          </Button>
      </div>
    )
  }
}
