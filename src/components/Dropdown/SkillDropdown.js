import React, { Component } from "react";
import { Dropdown, Menu, Button } from "antd";
import "antd/dist/antd.css";
class SkillDropdown extends Component {
  render() {
    const { skill, MyIcon } = this.props;
    return (
      <Dropdown
        overlay={
          <Menu>
            {skill.map((value, key) => (
              <Menu.Item key={key}>{value}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button type="link">
          <MyIcon type="icon-city" />
          Kĩ Năng
        </Button>
      </Dropdown>
    );
  }
}

export default SkillDropdown;
