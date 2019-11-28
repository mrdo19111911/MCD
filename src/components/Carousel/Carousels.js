import React, { Component } from "react";
import "antd/dist/antd.css";
import { Carousel, Row, Col,Card} from "antd";
import "./styles/index.less";
import banner from '../../images/banner.jpg';
import banner1 from '../../images/banner1.jpg';
import banner3 from '../../images/banner3.jpg';
class Carousels extends Component {
  render() {
    return (
      <Row>
        <Col md={16}>
          <Carousel   autoplaySpeed>
          <img src={banner}/>
          <img src={banner1} />
          </Carousel>
        </Col>
        <Col md={8} style={{paddingLeft:5}}>
          <Row type='flex' className="slideSub">
            <Col md={12} className="subTop">
              <Carousel autoplay effect='fade'>
              <img src={banner1} />
              <img src={banner1} />
              <img src={banner1} />
              </Carousel>
            </Col>
            <Col md={12} className="subBottom">
              <Carousel autoplay effect='fade'>
              <img src={banner} />
              <img src={banner1} />
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Carousels;
