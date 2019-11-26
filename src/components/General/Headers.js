import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Tag, Input } from "antd";

import IsAuthenticated from "./IsAuthenticated";
import UnAuthenticated from "./UnAuthenticated";
import './style/index.less';
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
              <img />
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
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Headers;
