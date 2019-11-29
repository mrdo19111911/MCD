import React, { Component } from "react";
import { Row, Col, List, Card, Icon, Avatar, Tag, Rate } from "antd";
import "antd/dist/antd.css";
import "./styles/index.less";
import { Link } from "react-router-dom";
class FamousFortuneTellerMonth extends Component {
  render() {
    const { Meta } = Card;
    const data = ["Racing car sprays burning fuel into crowd."];
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_1518635_pulz0ck43z.js"
    });
    const desc = ["Khinh Khủng", "Tồi", "Bình Thường", "Tốt", "Tuyệt Vời"];
    return (
      <Row type="flex" className="monthFamous" gutter={[{ md: 8 }]}>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col md={4}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item className="listItem">
                <Card hoverable style={{ width: "100%" }} className="famous">
                  {/* <h3 className="provice">Hà Nội</h3> */}
                  <Tag color="cyan" className="provice">
                    Hà Nội
                  </Tag>
                  <Meta
                    avatar={
                      <Avatar
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        size={96}
                      />
                    }
                    title="Trần Dần"
                  />
                  <div>
                    <div className="famousSkill">
                      <Tag color="purple">Bói Bài</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={2.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Tử Vi</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={3.5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div className="famousSkill">
                      <Tag color="purple">Hầu Đồng</Tag>
                      <Rate
                        style={{ fontSize: 15 }}
                        allowHalf
                        defaultValue={5}
                        disabled
                        character={<MyIcon type="icon-star1" />}
                        tooltips={desc}
                      />
                    </div>
                    <div style={{ textAlign: "end", marginTop: 8 }}>
                      <Tag color="purple">
                        <Link to="/" title="Xem Thêm">
                          Xem Thêm
                        </Link>
                      </Tag>
                    </div>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

export default FamousFortuneTellerMonth;
