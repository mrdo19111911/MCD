import React, { Component } from "react";
import { Row, Tabs } from "antd";
import "antd/dist/antd.css";
import "./styles/index.less";
class FamousFortuneTeller extends Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <Row>
        <h3 className="famousTitle">Thầy bói đang nổi</h3>
        <Tabs>
          <TabPane tab="Theo Tuaa" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs>
      </Row>
    );
  }
}

export default FamousFortuneTeller;
