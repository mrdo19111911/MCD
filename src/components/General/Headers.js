import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Tag, Input,Menu } from "antd";
import {Link} from 'react-router-dom';
import IsAuthenticated from "./IsAuthenticated";
import UnAuthenticated from "./UnAuthenticated";
import './style/index.less';
import Logo from '../../images/logo.png';
import { MenuItem } from "rc-menu";
class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  render() {
    const { Search } = Input;
    return (
      <Row type="flex" justify="center" >
        <Col span={18}>
          <Row type='flex' >
            <Col md={4}>
              <img src={Logo} />
            </Col>
            <Col md={20}>
              <Row type="flex">
              <Col md={15} className='search'>
                  <Search enterButton placeholder="Tìm Kiếm" allowClear onChange onSearch/>
                </Col>
                <Col md={9}>
                  <Row type="flex" justify="end"align='middle' >
                    <Col>
                      <Tag color="green">Đăng Bài</Tag>
                    </Col>
                    {this.state.isAuthenticated ? (
                      <IsAuthenticated />
                    ) : (
                        <UnAuthenticated />
                      )}
                  </Row>
                </Col>
              </Row>
              <Row type='flex'>
            <Col md={10}>
              <Menu mode='horizontal' className="customclass">
                <MenuItem>
                      <Link to="/">Bói Tuổi</Link>
                </MenuItem>
                <MenuItem>
                      <Link to="/">Tử Vi</Link>
                </MenuItem>
                <MenuItem>
                      <Link to="/">Xem Nhà</Link>
                </MenuItem>
                <MenuItem>
                      <Link to="/">Phong Thuỷ</Link>
                </MenuItem>
                <MenuItem>
                      <Link to="/">Bói Tarot</Link>
                </MenuItem>
              </Menu>
            </Col>
          </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Headers;
