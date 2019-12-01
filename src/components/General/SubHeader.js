import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Col, Popover, Button, Row } from "antd";
import Login from "../Modal/Login";
import Register from "../Modal/Register";
class SubHeader extends Component {
  render() {
    return (
      <Row type="flex" justify="end">
        <Col className="subheader">
          <Popover
            title="Đăng Nhập Để Xem Thông Báo"
            content={
              <div className="notification">
                <Button type="primary">Đăng Kí</Button>
                <Button type="primary">Đăng Nhập</Button>
              </div>
            }
          >
            <Link>
              <Button type="link" ghost icon="bell">
                Thông Báo
              </Button>
            </Link>
          </Popover>
          <Link>
            <Button type="link" icon="question-circle" ghost>
              Trợ Giúp
            </Button>
          </Link>
          <Link>
            <Button type="link" ghost>
              Đăng Kí
            </Button>
          </Link>
          <Link>
            <Button type="link" ghost>
              Đăng Nhập
            </Button>
          </Link>
          <Login />
          <Register />
        </Col>
      </Row>
    );
  }
}

export default SubHeader;
