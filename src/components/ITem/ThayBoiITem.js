import React, { Component } from "react";
import "antd/dist/antd.css";
import { Col, Row, Avatar, Rate } from "antd";
import "../../containers/ThayBoi/styles/index.less";
class PostRated extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="middle" className="ListItem">
        <Col md={2}>
          <Avatar size="large" src={this.props.avatar} />
        </Col>
        <Col md={21}>
          <h2>{this.props.children}</h2>
          <Rate disabled defaultValue={this.props.avgStar} />
        </Col>
      </Row>
    );
  }
}

export default PostRated;
