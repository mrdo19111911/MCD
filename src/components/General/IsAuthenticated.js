import React, { Component } from "react";
import "antd/dist/antd.css";
import { Dropdown, Avatar, Icon } from "antd";
import AvatarMenu from "../../components/Menu/AvatarMenu";
class IsAuthenticated extends Component {
  render() {
    return (
      <Dropdown overlay={AvatarMenu} placement="bottomLeft">
        <Avatar icon={<Icon type="user" />} />
      </Dropdown>
    );
  }
}

export default IsAuthenticated;
