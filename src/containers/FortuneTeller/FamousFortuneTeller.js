import React, { Component } from "react";
import { Row, Tabs} from "antd";
import "./styles/index.less";
import "antd/dist/antd.css";
import FamousFortuneTellerMonth from "./FamousFortuneTellerMonth";
import FamousFortuneTellerYear from "./FamousFortuneTellerYear";
import FamousFortuneTellerAll from "./FamousFortuneTellerAll";
class FamousFortuneTeller extends Component {
  render() {
    const { TabPane } = Tabs;

    return (
      <Row>
        <h3 className="famousTitle">Thầy bói đang nổi</h3>
        <Tabs>
          <TabPane tab="Tháng" key="1">
            <FamousFortuneTellerMonth />
          </TabPane>
          <TabPane tab="Năm" key="2">
           <FamousFortuneTellerYear />
          </TabPane>
          <TabPane tab="Tất Cả" key="3">
            <FamousFortuneTellerAll />
          </TabPane>
        </Tabs>
      </Row>
    );
  }
}

export default FamousFortuneTeller;
