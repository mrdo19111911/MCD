import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col,Input } from "antd";
import SubHeader from "./SubHeader";
import SubHeaderTopSearch from './SubHeaderTopSearch';
import "./style/index.less";
class Headers extends Component {
  render() {
    const {Search} = Input;
    return (
      <div>
        <SubHeader />
        <Row>
          <Col md={4}></Col>
          <Col md={12} className='subheader'>
            <Search enterButton />
          </Col>
        </Row>
        <SubHeaderTopSearch />
      </div>
    );
  }
}

export default Headers;
