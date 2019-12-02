import React, { Component } from "react";
import {
  Row,
  Col,
  Avatar,
  Progress,
  Rate,
  Icon,
  Tag,
  Collapse,
  Comment,
  Tooltip
} from "antd";
import "antd/dist/antd.css";
import "./styles/index.less";
import moment from "moment";
class RateFortuneTeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0,
      action: null
    };
  }
  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: "liked"
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: "disliked"
    });
  };
  render() {
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_1518635_pulz0ck43z.js"
    });
    const desc = ["Khinh Khủng", "Tồi", "Bình Thường", "Tốt", "Tuyệt Vời"];
    const rateStart = {
      sao1: "#ff6f31",
      sao2: "#ff9f02",
      sao3: "#ffcf02",
      sao4: "#9ace6a",
      sao5: "#57bb8a"
    };
    const { Panel } = Collapse;
    const { likes, dislikes, action } = this.state;
    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>
    ];
    return (
      <div>
        <Row>
          <Col md={10}>
            <Avatar
              shape="square"
              size={450}
              src="https://cf.shopee.vn/file/6bad0abd27728ddfbe926cee65667cf5"
            />
          </Col>
          <Col md={14}></Col>
        </Row>
        <Row>
          <h3>Đánh giá và nhận xét</h3>
          <div>
            {/* Tổng số trung bình sao */}
            <Row
              type="flex"
              justify="center"
              align="middle"
              gutter={[{ md: 10 }]}
            >
              <Col md={5} className="ratePercent">
                <h1>4.5</h1>
                <Rate
                  className="rate5star"
                  defaultValue={4.5}
                  allowHalf
                  disabled
                  character={<MyIcon type="icon-star1" />}
                  tooltips={desc}
                />
                <span>700000 đánh giá</span>
              </Col>
              {/* List Skill */}
              <Col md={18}>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Tử Vi</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      className="rate5star"
                      defaultValue={5}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor="#57bb8a"
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Tứ Trụ</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      className="rate5star"
                      defaultValue={4.5}
                      allowHalf
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao4}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Hầu Đồng</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      defaultValue={3}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao3}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Chiêm Tinh</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      defaultValue={2}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao2}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Quẻ Kinh Dịch</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      className="rate1star"
                      defaultValue={1}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao1}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Bói Bài Tây</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      defaultValue={3}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao3}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Phong Thủy</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      className="rate5star"
                      defaultValue={4}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao4}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Xem Ngày Tốt</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      className="rate1star"
                      defaultValue={1}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao1}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Tam Thức</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      defaultValue={2}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao2}
                    />
                  </Col>
                </Row>
                <Row
                  type="flex"
                  className="rateProgress"
                  justify="center"
                  align="middle"
                >
                  <Col md={3}>
                    <Tag color="purple">Xem Tướng</Tag>
                  </Col>
                  <Col md={5}>
                    <Rate
                      defaultValue={2}
                      disabled
                      character={<MyIcon type="icon-star1" />}
                      tooltips={desc}
                    />
                  </Col>
                  <Col md={16}>
                    <Progress
                      percent={80}
                      format={percent => `${percent}`}
                      strokeColor={rateStart.sao2}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Tử Vi" key="1">
            <Comment
              actions={actions}
              author={<h4>Vũ Hồng Việt</h4>}
              avatar={
                <Avatar
                  src="https://cf.shopee.vn/file/6bad0abd27728ddfbe926cee65667cf5"
                  alt="Vũ Hồng Việt"
                />
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </Panel>
          <Panel header="Kinh Dịch Hội" key="2"></Panel>
          <Panel header="Tứ Trụ" key="3"></Panel>
        </Collapse>
      </div>
    );
  }
}

export default RateFortuneTeller;
