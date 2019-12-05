import React, { Component } from "react";
import { Row, Col, Tag, Rate, Progress, Icon } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as RequestDetail from "../../redux/action/FortuneTellerDetail";
class ListSkill extends Component {
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
    const result = this.props.receviedData.receviedData;
    // console.log(result)
    const ListSkill = () => {
      var data = null;
      result.map(res => {
        let rates = res.data.average[0].rates;
        var total = rates[rates.length - 1].total;
        data = rates.map((res, key) => {
          var rates = Object.values(res)[0];
          if (rates.avg != null)
            return (
              <Row
                type="flex"
                className="rateProgress"
                justify="center"
                align="middle"
                key={key}
              >
                <Col md={3}>
                  <Tag color="purple">{rates.name}</Tag>
                </Col>
                <Col md={5}>
                  <Rate
                    className="rate5star"
                    defaultValue={rates.avg}
                    disabled
                    character={<MyIcon type="icon-star1" />}
                    tooltips={desc}
                  />
                </Col>
                <Col md={16}>
                  <Progress
                    percent={Math.round((rates.avg / total) * 100)}
                    format={percent => `${percent}`}
                    strokeColor="#57bb8a"
                  />
                </Col>
              </Row>
            );
        });
      });
      return data;
    };
    return (
      <div  className='list-skill'>
        <ListSkill />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    receviedData: state.FortuneTellerDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestDetail: bindActionCreators(RequestDetail, dispatch)
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ListSkill);
