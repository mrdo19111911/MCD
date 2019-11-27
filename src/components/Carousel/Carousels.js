import React, { Component } from "react";
import "antd/dist/antd.css";
import {Carousel,Row} from "antd";
import './styles/index.less'
class Carousels extends Component {
  render() {
    return (
       <Row>
          <Carousel autoplay>
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
       </Row>
    );
  }
}

export default Carousels;
