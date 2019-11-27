import React, { Component } from "react";
import {
  Col,
  Affix,
  Tabs,
  Icon,
  List
} from "antd";
import "antd/dist/antd.css";
import SkillDropdown from "../../components/Dropdown/SkillDropdown";
import AddressDropdown from "../../components/Dropdown/AddressDropdown";
import ListItemMeta  from './ListItemMeta';
class SiderRight extends Component {
  render() {
    const { TabPane } = Tabs;
    const { result, MyIcon } = this.props;

    return (
      <Col md={9} className="mainRight">
        <Affix offsetTop={64}>
          <Tabs defaultActiveKey="1" className="tabsRight">
            <TabPane
              tab={
                <span>
                  <Icon type="like" />
                  Top thầy bói uy tín
                </span>
              }
              key="1"
            >
              <List
                bordered="true"
                itemLayout="horizontal"
                dataSource={result.data}
                renderItem={item => (
                  <List.Item
                    className="listItem"
                    key={item.thayboi._id}
                    actions={[
                      <AddressDropdown
                        address={item.thayboi.address}
                        MyIcon={MyIcon}
                      />,
                      <SkillDropdown
                        skill={item.thayboi.skill}
                        MyIcon={MyIcon}
                      />
                    ]}
                  >
                    <ListItemMeta item={item} MyIcon={MyIcon}/>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="dislike" />
                  Top thầy bói nên né
                </span>
              }
              key="2"
            >
              <List
                bordered="true"
                itemLayout="horizontal"
                dataSource={result.data}
                renderItem={item => (
                  <List.Item
                    className="listItem"
                    key={item.thayboi._id}
                    actions={[
                      <AddressDropdown
                        address={item.thayboi.address}
                        MyIcon={MyIcon}
                      />,
                      <SkillDropdown
                        skill={item.thayboi.skill}
                        MyIcon={MyIcon}
                      />
                    ]}
                  >
                  <ListItemMeta item={item} MyIcon={MyIcon}/>
                  </List.Item>
                )}
              />
            </TabPane>
          </Tabs>
        </Affix>
      </Col>
    );
  }
}

export default SiderRight;
