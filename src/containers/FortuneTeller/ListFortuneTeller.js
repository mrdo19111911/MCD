import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
class ListFortuneTeller extends Component {
  render() {
    const MienBac = [
      "Lào Cai",
      "Yên Bái",
      "Điện Biên",
      "Hòa Bình",
      "Lai Châu",
      "Sơn La",
      "Hà Giang",
      "Cao Bằng",
      "Bắc Kạn",
      "Lạng Sơn",
      "Tuyên Quang",
      "Thái Nguyên",
      "Phú Thọ",
      "Bắc Giang",
      "Quảng Ninh",
      "Hà Nội",
      "Hải Phòng",
      "Bắc Ninh",
      "Hà Nam",
      "Hải Dương",
      "Hưng Yên",
      "Nam Định",
      "Ninh Bình",
      "Thái Bình",
      "Vĩnh Phúc"
    ];
    const MienTrung = [
      "Thanh Hóa",
      "Nghệ An",
      "Hà Tĩnh",
      "Quảng Bình",
      "Quảng Trị",
      "Thừa Thiên Huế",
      "Đà Nẵng",
      "Quảng Nam",
      "Quảng Ngãi",
      "Bình Định",
      "Phú Yên",
      "Khánh Hòa",
      "Ninh Thuận",
      "Bình Thuận",
      "Kom Tum",
      "Gia Lai",
      "Đắc Lắc",
      "Đắc Nông",
      "Lâm Đồng"
    ];
    const MienNam = [
      "Hồ Chí Minh",
      "Cần Thơ",
      "Bình Phước",
      "Đồng Nai",
      "Bình Dương",
      "Tây Ninh",
      "Bà Rịa - Vũng Tàu",
      "Long An",
      "Đồng Tháp",
      "Tiền Giang",
      "An Giang",
      "Bến Tre",
      "Vĩnh Long",
      "Trà Vinh",
      "Hậu Giang",
      "Kiên Giang",
      "Sóc Trăng",
      "Bạc Liêu",
      "Cà Mau"
    ];
    const d = [
      "Bạc Liêu",
      "Bắc Ninh",
      "Bình Phước",
      "Cần Thơ",
      "Điện Biên",
      "Hà Giang",
      "Hải Dương",
      "Hưng Yên",
      "Lai Châu",
      "Long An",
      "Ninh Thuận",
      "Quảng Nam",
      "Sóc Trăng",
      "Thái Nguyên",
      "Trà Vinh",
      "Yên Bái"
    ];
    const getProvice = item => {
      var resulut = null;
      resulut = item.map((value, key) => {
        return (
          <div className="fortunLocation" key={key}>
            <Link to={`${value}`}>
              Thầy Bói Tại {value}
            </Link>
          </div>
        );
      });
      return resulut;
    };
    return (
      <div>
        <h3 className="famousTitle">Danh sách thầy bói theo tỉnh thành</h3>
        <Row>
          <Col md={8} className="listLocation">
              <h2>Miền Bắc</h2>
            {getProvice(MienBac)}
          </Col>
          <Col md={8} className="listLocation">
          <h2>Miền Trung</h2>
            {getProvice(MienTrung)}
          </Col>
          <Col md={8} className="listLocation">
          <h2>Miền Nam</h2>
            {getProvice(MienNam)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListFortuneTeller;
