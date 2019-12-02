import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
class ListFortuneTeller extends Component {
  render() {
    const MienBac = [
      "Hà Nội",
      "Bắc Giang",
      "Bắc Kạn",
      "Bắc Ninh",
      "Cao Bằng",
      "Điện Biên",
      "Hà Giang",
      "Hà Nam",
      "Hòa Bình",
      "Hưng Yên",
      "Hải Dương",
      "Hải Phòng",
      "Lai Châu"
    ];
    const MienBac1 = [
      "Lào Cai",
      "Lạng Sơn",
      "Nam Định",
      "Ninh Bình",
      "Phú Thọ",
      "Quảng Ninh",
      "Sơn La",
      "Thái Bình",
      "Thái Nguyên",
      "Tuyên Quang",
      "Vĩnh Phúc",
      "Yên Bái"
    ];

    const MienTrung = [
      "Bình Thuận",
      "Bình Định",
      "Đà Nẵng",
      "Đắc Lắc",
      "Đắc Nông",

      "Gia Lai",
      "Hà Tĩnh",
      "Khánh Hòa",
      "Kom Tum",
      "Lâm Đồng",
      "Nghệ An",

      "Ninh Thuận",
      "Phú Yên",
      "Quảng Bình"
    ];
    const MienTrung1 = [
      "Quảng Nam",
      "Quảng Ngãi",
      "Quảng Trị",
      "Thanh Hóa",
      "Thừa Thiên Huế"
    ];

    const MienNam = [
      "Hồ Chí Minh",
      "An Giang",
      "Bà Rịa - Vũng Tàu",
      "Bình Dương",
      "Bình Phước",

      "Bạc Liêu",
      "Bến Tre",
      "Cà Mau",
      "Cần Thơ",
      "Đồng Nai",

      "Đồng Tháp",
      "Hậu Giang",
      "Kiên Giang"
    ];

    const MienNam1 = [
      "Long An",
      "Sóc Trăng",
      "Tiền Giang",
      "Trà Vinh",
      "Tây Ninh",
      "Vĩnh Long"
    ];

    const getProvice = item => {
      var result = null;
      result = item.map((value, key) => {
        return (
          <div className="fortunLocation" key={key}>
            <Link to={`${value}`}>{value}</Link>
          </div>
        );
      });

      return result;
    };
    return (
      <div>
        <h3 className="famousTitle">Danh sách thầy bói theo tỉnh thành</h3>
        <Row>
          <Col md={4} className="listLocation">
            <h2>Miền Bắc</h2>
            {getProvice(MienBac)}
          </Col>
          <Col md={4} className="listLocation">
            <h2>&nbsp;</h2>
            {getProvice(MienBac1)}
          </Col>
          <Col md={4} className="listLocation">
            <h2>Miền Trung</h2>
            {getProvice(MienTrung)}
          </Col>
          <Col md={4} className="listLocation">
            <h2>&nbsp;</h2>
            {getProvice(MienTrung1)}
          </Col>
          <Col md={4} className="listLocation">
            <h2>Miền Nam</h2>
            {getProvice(MienNam)}
          </Col>
          <Col md={4} className="listLocation">
            <h2>&nbsp;</h2>
            {getProvice(MienNam1)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListFortuneTeller;
