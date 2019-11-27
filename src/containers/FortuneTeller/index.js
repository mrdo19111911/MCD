import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Menu } from "antd";
import Carousels from "../../components/Carousel/Carousels";
import ListSkillMenu from "../../components/Menu/ListSkillMenu";
import FamousFortuneTeller from "./FamousFortuneTeller";

class FortuneTeller extends Component {
  render() {
    return (
      <div>
        <Carousels />
        <ListSkillMenu />
        <FamousFortuneTeller />
      </div>
    );
  }
}

export default FortuneTeller;
