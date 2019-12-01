import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Input, AutoComplete, Button, Icon } from "antd";
import SubHeader from "./SubHeader";
import SubHeaderTopSearch from "./SubHeaderTopSearch";
import "./style/index.less";

const { Option } = AutoComplete;

function onSelect(value) {
  console.log("onSelect", value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}
function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : []
    });
  };
  render() {
    const { dataSource } = this.state;

    return (
      <div>
        <SubHeader />
        <Row>
          <Col md={4}></Col>
          <Col md={12} className="subheader">
            <AutoComplete
              style={{ width: "100%" }}
              dataSource={dataSource.map(renderOption)}
              onSelect={onSelect}
              onSearch={this.handleSearch}
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
