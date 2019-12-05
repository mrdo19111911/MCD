import React, { Component } from "react";
import {
  Row,
  Col,
  Avatar,
  Rate,
  Icon,
  Tag,
  Affix,
  Input,
  List,
  Card
} from "antd";
import "antd/dist/antd.css";
import "./styles/index.less";

import ListSkill from "./ListSkill";
import ListComment from "../../components/Comment/listcomment";
import { Link } from "react-router-dom";

class RateFortuneTeller extends Component {
  render() {
    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_1518635_6kks1vox40x.js"
    });
    const data = [
      {
        title: "Bình Luận",
        icon: "icon-comment"
      },
      {
        title: "Hình Ảnh",
        icon: "icon-photo"
      },
      {
        title: "Viết Bình Luận",
        icon: "icon--write"
      },
      {
        title: "Bản Đồ",
        icon: "icon-map1"
      }
    ];

    return (
      <div>
        <Row
          type="flex"
          align="middle"
          style={{ background: "#fff", paddingTop: 10, paddingBottom: 10 }}
        >
          <Col md={10} className="res-common-image">
            <img src="https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/bannerslides/banner_4_5_december_vn.jpg" />
          </Col>
          <Col md={14} className="res-common-info">
            <div className="main-info-title">
              <h1>Vũ Hồng Việt</h1>
            </div>
            <div className="disableSection">
              <div className="res-common-add">
                <MyIcon type="icon-location" className="tag" />
                <span>14 Ngách 19 Ngõ 381 Nguyễn Khang, &nbsp;</span>
                <MyIcon type="icon-map" className="location" />
                <span className="location">Quận Cầu Giấy, &nbsp;</span>
                <MyIcon type="icon-city" className="location" />
                <span>Hà Nội</span>
              </div>

              <div className="micro-timesopen">
                <MyIcon type="icon-oclock" className="tag" />
                <span className="itsopen">Đang hoạt động</span>
                <span>09:30 - 22:00 &nbsp;</span>
                <MyIcon type="icon-exclamation" />
              </div>

              <div className="list-price">
                <div className="skill-detail">
                  <Icon type="tags" className="tag" />
                  <Tag color="purple">Bói Bài</Tag>
                  <span className="price">500.000đ</span>
                </div>
                <div className="skill-detail">
                  <Icon type="tags" className="tag" />
                  <Tag color="purple">Xem Bói</Tag>
                  <span className="price">500.000đ</span>
                </div>
                <div className="skill-detail">
                  <Icon type="tags" className="tag" />
                  <Tag color="purple">Gọi Hồn</Tag>
                  <span className="price">500.000đ</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="main">
          <Col md={3}>
            <Affix offsetTop={111} className="slideLeft">
              <Link to="/">Trang chủ</Link>
              <Link to="/">Bình Luận</Link>
            </Affix>
          </Col>
          <Col md={21}>
            <Affix offsetTop={111}>
              <List
                grid={{ gutter: 0, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card className="detail-menu">
                      <Link
                        title={item.title}
                        to={item.title}
                        className="link-detail"
                      >
                        <MyIcon type={item.icon} />
                        <span className="detail-menu-content">
                          {item.title}
                        </span>
                      </Link>
                    </Card>
                  </List.Item>
                )}
              />
            </Affix>
            <Row>
              <Col md={13}>
                <ListComment />
                <ListComment />
                <ListComment />
                <ListComment />
                <ListComment />
                <ListComment />
              </Col>
              <Col md={11}>
                <Affix offsetTop={157}>
                  <ListSkill />
                </Affix>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RateFortuneTeller;

{
  /* <Row>
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
<div> */
}
{
  /* Tổng số trung bình sao */
}
// <Row
//   type="flex"
//   justify="center"
//   align="middle"
//   gutter={[{ md: 10 }]}
// >
//   <Col md={5} className="ratePercent">
//     <h1>4.5</h1>
//     <Rate
//       className="rate5star"
//       defaultValue={4.5}
//       allowHalf
//       disabled
//       character={<MyIcon type="icon-star1" />}
//       tooltips={desc}
//     />
//     <span>700000 đánh giá</span>
//   </Col>
{
  /* List Skill */
}
//     <Col md={18}>
//       <ListSkill />
//     </Col>
//   </Row>
// </div>
// </Row>
// <Row>
// <Col md={12}>
//   <ListComment />
//   <WriteComment />
// </Col>
// <Col md={12}></Col>
// </Row>
