import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, List, Typography, Icon } from "antd";
class NewsHot extends Component {
  render() {
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_1518635_x92bir9uq0n.js"
    });
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
    ];
    return (
      <div>
        <Row type="flex" className='searchTrends'>
          <Col md={16} className='contentNew'>
            <h3>Nội Dung Tin</h3>
            <div className="subContentNew">
            <List
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item className="listNew">
                  <Typography.Text>
                    <MyIcon
                      type="icon-new"
                      style={{ fontSize: 28 }}
                      className="icon"
                    />
                  </Typography.Text>{" "}
                  <h4>{item}</h4>
                </List.Item>
              )}
            />
            </div>
          </Col>
          <Col md={8} className="contentNewRight">
            <List
              header={<h3>Tin Trong Giới</h3>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item className="listNew">
                  <Typography.Text>
                    <MyIcon
                      type="icon-new"
                      style={{ fontSize: 28 }}
                      className="icon"
                    />
                  </Typography.Text>{" "}
                  <h4>{item}</h4>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewsHot;
