import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Input, AutoComplete, Button, Icon } from "antd";
import SubHeader from "./SubHeader";
import SubHeaderTopSearch from "./SubHeaderTopSearch";
import "./style/index.less";
class Headers extends Component {
  render() {
    return (
      <div>
        <SubHeader />
        <Row>
          <Col md={4}></Col>
          <Col md={12} className="subheader">
            <AutoComplete
              style={{ width: "100%" }}
              // dataSource={dataSource.map(renderOption)}
              placeholder="Tìm Kiếm"
              optionLabelProp="text"
            >
              <Input
                className="headerSearch"
                suffix={
                  <Button type="primary" style={{ marginRight: -12 }}>
                    <Icon type="search" />
                  </Button>
                }
              />
            </AutoComplete>
          </Col>
        </Row>
        <SubHeaderTopSearch />
      </div>
    );
  }
}

export default Headers;
