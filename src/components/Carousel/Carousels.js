import React, { Component } from "react";
import "antd/dist/antd.css";
import { Carousel, Row, Col } from "antd";
import "./styles/index.less";
class Carousels extends Component {
  render() {
    return (
      <Row>
        <Col md={16} style={{height:'100%'}}>
          <Carousel  className="carouselLeft">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Col>
        <Col md={8} style={{paddingLeft:5}}>
          <Row type='flex' style={{flexDirection:'column'}}>
            <Col md={12} style={{width:'100%'}}>
              <Carousel autoplay effect='fade'>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </Col>
            <Col md={12} style={{width:'100%',paddingTop:5}}>
              <Carousel autoplay effect='fade'>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Carousels;
