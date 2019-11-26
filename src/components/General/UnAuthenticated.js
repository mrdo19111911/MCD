import React, { Component } from "react";
import "antd/dist/antd.css";
import { Button, Col, Row } from "antd";
class UnAuthenticated extends Component {
  render() {
    return (
      <Col>
        <Row type="flex" justify="end">
          <Button style={{ marginRight: 15 }} type="primary">
            Đăng Nhập
          </Button>
          <Button type="primary">Đăng Kí</Button>
        </Row>
      </Col>
    );
  }
}

export default UnAuthenticated;
