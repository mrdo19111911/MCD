import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const AvatarMenu = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link to="/user">Quản Lý Tài Khỏan</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/logout">Đăng Xuất</Link>
      </Menu.Item>
    </Menu>
  );
};

export default AvatarMenu;
