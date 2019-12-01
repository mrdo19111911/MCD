import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Row, Col } from "antd";
import Headers from "../components/General/Headers";
import Footers from "../components/General/Footers";
import "./style/index.less";
class BasicLayout extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    const { children } = this.props;
    return (
      <Layout>
        <Header className="layoutHeader">
          <Headers />
        </Header>
        <Content className="content">
          <Row type="flex" justify="center" className="main">
            <Col span={18}>{children}</Col>
          </Row>
        </Content>
        <Footer className="layoutFooter">
          <Footers />
        </Footer>
      </Layout>
    );
  }
}

export default BasicLayout;
