import React, { Component } from "react";
import { Dropdown, Button, Menu } from "antd";
import "antd/dist/antd.css";
class AddressDropdown extends Component {
  render() {
    const { address, MyIcon } = this.props;
    return (
      <Dropdown
        overlay={
          <Menu>
            {address.map((value, key) => (
              <Menu.Item key={key}>{value}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button type="link">
          <MyIcon type="icon-city" />
          Địa Chỉ
        </Button>
      </Dropdown>
    );
  }
}

export default AddressDropdown;
