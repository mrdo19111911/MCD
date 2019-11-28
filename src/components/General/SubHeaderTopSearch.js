import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Col, Popover, Button, Row } from "antd";
class SubHeaderTopSearch extends Component {
  render() {
    return (
      <Row type="flex">
        <Col md={4}></Col>
        <Col md={12} className="subheader">
          <Link>
            <Button type="link" ghost style={{paddingLeft:0}}>
              Tử Vi
            </Button>
          </Link>
          <Link>
            <Button type="link" ghost>
              Xem Bói
            </Button>
          </Link>
          <Link>
            <Button type="link" ghost>
             Phong Thủy
            </Button>
          </Link>
          <Link>
            <Button type="link" ghost>
             Tứ Trụ
            </Button>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default SubHeaderTopSearch;
