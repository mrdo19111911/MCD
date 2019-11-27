import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuItem } from "rc-menu";
class ListSkillMenu extends Component {
  render() {
    return (
      <div style={{ background: "#fff" }}>
        <h4 style={{ paddingLeft: 20, textAlign: "center" }}>
          Danh mục chuyên môn của các thầy
        </h4>
        <Menu mode="horizontal vertical-left">
          <Menu.Item>
            <Link to="/">Hầu Đồng</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Soi Căn</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Tử Vi</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Tứ Trụ</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Chiêm Tinh</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Quẻ Kinh Dịch</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Bói Bài Tây</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Phong Thủy</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Xem Ngày Tốt</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Tam Thức</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Xem Tướng</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Bói Tâm Linh</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Cúng Bái</Link>
          </Menu.Item>
        </Menu>
        <Menu mode='horizontal'>
          <MenuItem>
            <Link to="/">Bói Tarot</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Các Môn Khác</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ListSkillMenu;
