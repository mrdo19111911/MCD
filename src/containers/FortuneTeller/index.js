import React, { Component } from "react";
import Carousels from "../../components/Carousel/Carousels";
import ListSkillMenu from "../../components/Menu/ListSkillMenu";
import FamousFortuneTeller from "./FamousFortuneTeller";
import SearchTrends from "./SearchTrends";
import NewsHot from './NewsHot';
import ListFortuneTeller from './ListFortuneTeller';

class FortuneTeller extends Component {
  render() {
    return (
      <div>
        <Carousels />
        <ListSkillMenu />
        <FamousFortuneTeller />
        <SearchTrends />
        <NewsHot />
        <ListFortuneTeller />
      </div>
    );
  }
}

export default FortuneTeller;
